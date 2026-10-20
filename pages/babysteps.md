<div class="page-hero">
    <p class="eyebrow">Cofounder &amp; Data Analyst · Aug 2023 – Sep 2026</p>
    <h1><a href="https://www.makebabysteps.com/">Baby Steps IVF</a></h1>
    <p class="sub">makebabysteps.com · Portland, OR</p>
    <p class="lede">Patients choosing an IVF clinic see raw success rates, and those rates reward clinics for treating easier patients. Baby Steps compares clinics on outcomes adjusted for the patients each clinic actually treats.</p>
    <div class="stats">
        <div class="stat"><b>3M+</b><span>IVF cycles</span></div>
        <div class="stat"><b>400+</b><span>US clinics</span></div>
        <div class="stat"><b>28 yrs</b><span>of CDC clinic reports</span></div>
        <div class="stat"><b>~50</b><span>pipeline steps, run weekly</span></div>
    </div>
</div>

<div class="block">
    <h2><span class="ico">🎯</span>What it does</h2>
    <p>Baby Steps IVF helps people compare US fertility clinics fairly. I designed the data foundation and the statistical models behind it, set product priorities, and coordinated two developers against a weekly release.</p>
</div>

<div class="block">
    <h2><span class="ico">🧭</span>How the data flows</h2>
    <div class="flow">
        <div class="step"><b>Sources</b>SART registry, CDC reports, Census, CMS, NPPES, FDA, price files</div>
        <div class="arrow">→</div>
        <div class="step"><b>Weekly pipeline</b>Python pulls, cleans and joins every source</div>
        <div class="arrow">→</div>
        <div class="step"><b>Checks &amp; review</b>Re-certify each clinic-year; hold disputed records for a human</div>
        <div class="arrow">→</div>
        <div class="step"><b>Publish</b>PostgreSQL (Supabase) and a hosted prediction API</div>
        <div class="arrow">→</div>
        <div class="step"><b>Site</b>Clinic comparisons on makebabysteps.com</div>
    </div>
</div>

<div class="split">
    <div class="block">
        <h2><span class="ico">📊</span>Data</h2>
        <ul>
            <li><b>Over 3 million IVF cycles</b> from 400+ US clinics, from the national SART registry.</li>
            <li><b>28 years of CDC clinic reports</b>, harmonized across reporting formats that changed over time.</li>
            <li>Census and community-health covariates, so comparisons aren't driven by differences in the populations clinics serve.</li>
            <li><b>IVF prices:</b> CPT/HCPCS rates from hospital price-transparency and insurer Transparency-in-Coverage files, matched to clinics.</li>
        </ul>
    </div>
    <div class="block">
        <h2><span class="ico">🔗</span>Record linkage</h2>
        <p>Clinics rebrand, merge and sometimes register twice. I linked SART and CDC clinic records across rebrands, mergers and duplicate registrations, and logged the evidence behind every match decision so each one can be reviewed.</p>
        <ul class="chips">
            <li>Rebrands</li><li>Mergers</li><li>Duplicate registrations</li><li>Evidence log</li>
        </ul>
    </div>
</div>

<div class="block">
    <h2><span class="ico">🧬</span>The IVF funnel, modeled stage by stage</h2>
    <p>Each cycle is modeled one stage at a time, so the site can show where each clinic's patients drop off, not just how many end in a birth.</p>
    <figure class="viz">
        <svg viewBox="0 0 640 96" role="img" aria-label="Three modeled stages: egg retrieval, embryo transfer, live birth">
            <g class="mark"><path class="bar bar-after" d="M4 8 H190 L214 48 L190 88 H4 Z" opacity="0.95"><title>Stage 1: egg retrieval</title></path><text x="100" y="54" text-anchor="middle" fill="#fff" style="fill:#fff;font-weight:700;font-size:16px">Egg retrieval</text></g>
            <g class="mark"><path class="bar bar-after" d="M214 8 H400 L424 48 L400 88 H214 L238 48 Z" opacity="0.8"><title>Stage 2: embryo transfer</title></path><text x="322" y="54" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:16px">Embryo transfer</text></g>
            <g class="mark"><path class="bar bar-after" d="M424 8 H636 V88 H424 L448 48 Z" opacity="0.65"><title>Stage 3: live birth</title></path><text x="540" y="54" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:16px">Live birth</text></g>
        </svg>
        <figcaption>Schematic of the modeled stages (not drawn to scale).</figcaption>
    </figure>
</div>

<div class="block">
    <h2><span class="ico">💠</span>Modeling and validation</h2>
    <ul>
        <li><b>Risk adjustment:</b> Bayesian hierarchical models adjust each clinic's success rates for patient age and case mix, so clinics treating harder cases aren't penalized.</li>
        <li><b>Honest validation:</b> models train on 2014–2022 and are scored on 2023–24 data they never saw.</li>
        <li>Gradient-boosted baselines (XGBoost/LightGBM) with walk-forward validation for comparison.</li>
    </ul>
    <figure class="viz">
        <svg viewBox="0 0 530 104" style="max-width:620px" role="img" aria-label="Training years 2014 to 2022, held-out validation years 2023 and 2024">
            <text x="217" y="24" text-anchor="middle" class="val" style="font-size:14px">Train · 2014–2022</text>
            <text x="516" y="24" text-anchor="end" class="val" style="font-size:14px">Validate · 2023–24</text>
            <line class="axis" x1="10" y1="31" x2="422" y2="31"/>
            <line class="axis" x1="424" y1="31" x2="516" y2="31"/>
<g class="mark"><rect class="bar bar-after" x="10" y="40" width="44" height="34" rx="4"><title>2014: trained on</title></rect><text class="lbl" x="32" y="94" text-anchor="middle">2014</text></g>
<g class="mark"><rect class="bar bar-after" x="56" y="40" width="44" height="34" rx="4"><title>2015: trained on</title></rect><text class="lbl" x="78" y="94" text-anchor="middle">2015</text></g>
<g class="mark"><rect class="bar bar-after" x="102" y="40" width="44" height="34" rx="4"><title>2016: trained on</title></rect><text class="lbl" x="124" y="94" text-anchor="middle">2016</text></g>
<g class="mark"><rect class="bar bar-after" x="148" y="40" width="44" height="34" rx="4"><title>2017: trained on</title></rect><text class="lbl" x="170" y="94" text-anchor="middle">2017</text></g>
<g class="mark"><rect class="bar bar-after" x="194" y="40" width="44" height="34" rx="4"><title>2018: trained on</title></rect><text class="lbl" x="216" y="94" text-anchor="middle">2018</text></g>
<g class="mark"><rect class="bar bar-after" x="240" y="40" width="44" height="34" rx="4"><title>2019: trained on</title></rect><text class="lbl" x="262" y="94" text-anchor="middle">2019</text></g>
<g class="mark"><rect class="bar bar-after" x="286" y="40" width="44" height="34" rx="4"><title>2020: trained on</title></rect><text class="lbl" x="308" y="94" text-anchor="middle">2020</text></g>
<g class="mark"><rect class="bar bar-after" x="332" y="40" width="44" height="34" rx="4"><title>2021: trained on</title></rect><text class="lbl" x="354" y="94" text-anchor="middle">2021</text></g>
<g class="mark"><rect class="bar bar-after" x="378" y="40" width="44" height="34" rx="4"><title>2022: trained on</title></rect><text class="lbl" x="400" y="94" text-anchor="middle">2022</text></g>
<g class="mark"><rect class="bar bar-accent" x="424" y="40" width="44" height="34" rx="4"><title>2023: held out for validation</title></rect><text class="lbl" x="446" y="94" text-anchor="middle">2023</text></g>
<g class="mark"><rect class="bar bar-accent" x="470" y="40" width="44" height="34" rx="4"><title>2024: held out for validation</title></rect><text class="lbl" x="492" y="94" text-anchor="middle">2024</text></g>
        </svg>
        <figcaption>Each year of registry data, by its role in model fitting. Hover a year for details.</figcaption>
    </figure>
</div>

<div class="block">
    <h2><span class="ico">🧰</span>Tools</h2>
    <ul class="chips">
        <li>Python</li><li>pandas</li><li>Polars</li><li>NumPy</li><li>PyMC</li><li>XGBoost</li><li>SQL</li><li>DuckDB</li><li>SQLite</li><li>PostgreSQL (Supabase)</li><li>Modal</li><li>Git/GitHub</li><li>GitHub Actions CI</li>
    </ul>
</div>

<a class="back" href="/">← Back to portfolio</a>
