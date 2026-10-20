<div class="page-hero">
    <p class="eyebrow">Community organizer · 6 years</p>
    <h1>Portland Effective Altruists &amp; Rationalists</h1>
    <p class="sub">PEAR · Portland, Oregon</p>
    <p class="lede">For six years I've helped lead PEAR, Portland's home for effective altruism and rationality. I won an EA Funds grant to grow it, and the group has since moved to being self-funded.</p>
    <div class="stats">
        <div class="stat"><b>1,000+</b><span>members on Meetup</span></div>
        <div class="stat"><b>6 yrs</b><span>organizing</span></div>
        <div class="stat"><b>Weekly</b><span>Thursday dinners</span></div>
        <div class="stat"><b>EA Funds</b><span>grant won, now self-funded</span></div>
    </div>
</div>

<div class="block">
    <h2><span class="ico">🌱</span>What I've done</h2>
    <ul>
        <li><b>Led the community for six years</b>; the Meetup group now has 1,000+ members.</li>
        <li><b>Won an EA Funds grant</b>, administered by the Centre for Effective Altruism (Sept 2021 – Sept 2022), to expand meetups, grow membership and advertise locally. I tracked the spending and wrote the progress and final reports, then moved the group to a self-funded model.</li>
        <li><b>Hosted Portland's ACX Meetups Everywhere</b> gathering, part of a worldwide meetup series, in 2024, 2025 and 2026.</li>
        <li>Helped put on PEAR's <b>Secular Solstice</b>, held every December since 2022.</li>
        <li>Bigger events have included an AI safety talk by Alex Turner (TurnTrout) and a joint meetup with the Los Angeles and Bay Area rationalist communities.</li>
        <li>Kept the calendar running: weekly dinners, book clubs, article discussions, AI safety meetups and larger events.</li>
    </ul>
</div>

<div class="block">
    <h2><span class="ico">📅</span>Upcoming events</h2>
    {% assign pear = site.data.pear_events %}
    {% if pear.events and pear.events.size > 0 %}
    <ul class="events">
        {% for event in pear.events %}
        <li>
            <div class="when"><b>{{ event.date }}</b><span>{{ event.time }}</span></div>
            <div class="what"><a href="{{ event.url }}">{{ event.title }}</a>{% if event.location != "" %}<span>{{ event.location }}</span>{% endif %}</div>
        </li>
        {% endfor %}
    </ul>
    <p class="note">Synced from Meetup every few hours{% if pear.updated != "" %} · last updated {{ pear.updated }}{% endif %}.</p>
    {% else %}
    <p>Weekly Thursday dinners, book clubs and AI safety meetups. See what's coming up on Meetup.</p>
    {% endif %}
    <a class="more" href="https://www.meetup.com/portland-effective-altruism-and-rationality/events/">Full calendar on Meetup →</a>
</div>

<div class="block">
    <h2><span class="ico">🗓️</span>What the community does</h2>
    <div class="flow">
        <div class="step"><b>Thursday dinners</b>A weekly social, the easiest way for newcomers to join</div>
        <div class="step"><b>Book clubs</b>Reading groups on books from the EA and rationalist canon</div>
        <div class="step"><b>AI safety meetups</b>Discussion groups on AI alignment and safety</div>
        <div class="step"><b>Article discussions</b>Recent posts from the EA Forum, LessWrong and Astral Codex Ten</div>
        <div class="step"><b>Secular Solstice</b>A yearly December gathering</div>
    </div>
</div>

<div class="block">
    <h2><span class="ico">✨</span>A community of bright people</h2>
    <p>PEAR grew into a lively, member-led community. It's home to thinkers whose work reaches well beyond Portland, including:</p>
    <ul>
        <li><a href="https://www.lesswrong.com/users/dreeves">Daniel Reeves</a>, cofounder of Beeminder</li>
        <li><a href="https://www.lesswrong.com/users/genesmith">GeneSmith</a>, who writes on genetics and human enhancement</li>
        <li><a href="https://www.lesswrong.com/users/adamzerner">Adam Zerner</a>, a longtime LessWrong writer</li>
    </ul>
</div>

<div class="block">
    <h2><span class="ico">🔗</span>Join in</h2>
    <div class="btn-grid" style="max-width:520px">
        <a class="btn primary" href="https://www.meetup.com/portland-effective-altruism-and-rationality/">Meetup (1,000+ members)</a>
        <a class="btn" href="https://pearcommunity.com">PEAR website</a>
        <a class="btn" href="https://groups.google.com/g/lesswrong-portland">Mailing list</a>
        <a class="btn" href="https://forum.effectivealtruism.org/groups/Gm5NiojRmw9eSDurE">EA Forum group</a>
        <a class="btn" href="https://www.lesswrong.com/groups/EbZXGajoX36MqtYz6">LessWrong group</a>
    </div>
</div>

<a class="back" href="/">← Back to portfolio</a>
