"""Fetch PEAR's upcoming Meetup events from the group's iCal feed into _data/pear_events.json."""
import json
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

FEED_URL = "https://www.meetup.com/portland-effective-altruism-and-rationality/events/ical/"
OUT_PATH = Path(__file__).resolve().parent.parent / "_data" / "pear_events.json"
PACIFIC = ZoneInfo("America/Los_Angeles")
MAX_EVENTS = 8


def unfold(text):
    """Join iCal continuation lines (lines starting with a space or tab)."""
    lines = []
    for raw in text.splitlines():
        if raw[:1] in (" ", "\t") and lines:
            lines[-1] += raw[1:]
        else:
            lines.append(raw)
    return lines


def unescape(value):
    return value.replace("\\n", " ").replace("\\,", ",").replace("\;", ";").replace("\\\\", "\\").strip()


def parse_start(params, value):
    """Return an aware datetime for a DTSTART value."""
    if "VALUE=DATE" in params and "T" not in value:
        return datetime.strptime(value, "%Y%m%d").replace(tzinfo=PACIFIC)
    if value.endswith("Z"):
        return datetime.strptime(value, "%Y%m%dT%H%M%SZ").replace(tzinfo=timezone.utc)
    zone = PACIFIC
    for param in params.split(";"):
        if param.startswith("TZID="):
            zone = ZoneInfo(param[5:])
    return datetime.strptime(value, "%Y%m%dT%H%M%S").replace(tzinfo=zone)


def parse_events(text):
    events, current = [], None
    for line in unfold(text):
        if line == "BEGIN:VEVENT":
            current = {}
        elif line == "END:VEVENT" and current is not None:
            events.append(current)
            current = None
        elif current is not None and ":" in line:
            key, value = line.split(":", 1)
            name, _, params = key.partition(";")
            current[name] = (params, value)
    return events


def upcoming(events, now):
    result = []
    for event in events:
        if "DTSTART" not in event or "SUMMARY" not in event:
            continue
        start = parse_start(*event["DTSTART"]).astimezone(PACIFIC)
        if start < now:
            continue
        result.append({
            "title": unescape(event["SUMMARY"][1]),
            "start": start.isoformat(),
            "date": start.strftime("%a, %b %-d"),
            "time": start.strftime("%-I:%M %p"),
            "location": unescape(event.get("LOCATION", ("", ""))[1]),
            "url": event.get("URL", ("", ""))[1].strip(),
        })
    result.sort(key=lambda item: item["start"])
    return result[:MAX_EVENTS]


def main():
    request = urllib.request.Request(FEED_URL, headers={"User-Agent": "scelarek.github.io calendar sync"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            text = response.read().decode("utf-8", "replace")
    except Exception as error:
        print(f"Could not fetch the Meetup feed, keeping the existing file: {error}")
        return 0
    if "BEGIN:VCALENDAR" not in text:
        print("Response was not an iCal feed, keeping the existing file.")
        return 0
    events = upcoming(parse_events(text), datetime.now(PACIFIC))
    OUT_PATH.write_text(json.dumps({"updated": datetime.now(PACIFIC).strftime("%b %-d, %Y"), "events": events}, indent=2) + "\n")
    print(f"Wrote {len(events)} upcoming events.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
