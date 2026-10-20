<div class="page-hero">
    <p class="eyebrow">Data Analyst · Oct 2023 – Oct 2026 · Portland, OR</p>
    <h1>Nerevu Group</h1>
    <p class="sub">Production data work for a small Portland firm</p>
    <p class="lede">Pipelines that run every night, tests that keep them honest, and reports clients act on.</p>
    <div class="stats">
        <div class="stat"><b>30 → 1</b><span>minutes of lead prep</span></div>
        <div class="stat"><b>3×</b><span>lead volume</span></div>
        <div class="stat"><b>18</b><span>pipeline steps, sole programmer</span></div>
        <div class="stat"><b>1,000+</b><span>applicants in a funnel analysis</span></div>
    </div>
</div>

<div class="block">
    <h2><span class="ico">⚙️</span>Government contracting pipeline</h2>
    <p>I was the sole programmer on an 18-step Python, PostgreSQL and Airtable pipeline on Heroku that turns raw government contracting data into ready-to-use leads.</p>
    <div class="flow">
        <div class="step"><b>Collect</b>REST APIs, web scraping, PDF and XFA extraction</div>
        <div class="arrow">→</div>
        <div class="step"><b>Enrich</b>LLM summarization, with an automated scorer grading output quality</div>
        <div class="arrow">→</div>
        <div class="step"><b>Store</b>PostgreSQL, synced to Airtable for the team</div>
        <div class="arrow">→</div>
        <div class="step"><b>Use</b>Leads ready in about a minute</div>
    </div>
</div>

<div class="split">
    <div class="block">
        <h2><span class="ico">⏱️</span>Lead prep time</h2>
        <figure class="viz">
            <svg viewBox="0 0 370 110" role="img" aria-label="Lead preparation time fell from over 30 minutes to about 1 minute">
                <line class="axis" x1="60" y1="6" x2="60" y2="100"/>
                <g class="mark"><text class="lbl" x="52" y="34" text-anchor="end">Before</text><rect class="bar bar-before" x="60" y="14" width="240" height="30" rx="4"><title>Before: 30+ minutes per lead</title></rect><text class="val" x="308" y="34">30+ min</text></g>
                <g class="mark"><text class="lbl" x="52" y="80" text-anchor="end">After</text><rect class="bar bar-after" x="60" y="60" width="8" height="30" rx="3"><title>After: about 1 minute per lead</title></rect><text class="val" x="76" y="80">~1 min</text></g>
            </svg>
            <figcaption>Minutes to prepare one lead.</figcaption>
        </figure>
    </div>
    <div class="block">
        <h2><span class="ico">📈</span>Lead volume</h2>
        <figure class="viz">
            <svg viewBox="0 0 370 110" role="img" aria-label="Lead volume tripled">
                <line class="axis" x1="60" y1="6" x2="60" y2="100"/>
                <g class="mark"><text class="lbl" x="52" y="34" text-anchor="end">Before</text><rect class="bar bar-before" x="60" y="14" width="80" height="30" rx="4"><title>Before: baseline volume</title></rect><text class="val" x="148" y="34">1×</text></g>
                <g class="mark"><text class="lbl" x="52" y="80" text-anchor="end">After</text><rect class="bar bar-after" x="60" y="60" width="240" height="30" rx="4"><title>After: three times the volume</title></rect><text class="val" x="308" y="80">3×</text></g>
            </svg>
            <figcaption>Leads handled, relative to before the pipeline.</figcaption>
        </figure>
    </div>
</div>

<div class="block">
    <h2><span class="ico">🧪</span>Fixes that stay fixed</h2>
    <p>I set up the project's error logging and its first CI. Every production error followed the same loop, so a problem couldn't quietly come back.</p>
    <div class="flow">
        <div class="step"><b>1 · Error logged</b>Production error is captured automatically</div>
        <div class="arrow">→</div>
        <div class="step"><b>2 · Issue</b>It becomes a tracked issue</div>
        <div class="arrow">→</div>
        <div class="step"><b>3 · Test</b>A test that recreates it is written first</div>
        <div class="arrow">→</div>
        <div class="step"><b>4 · Fix</b>The fix ships with that test pinned in CI</div>
    </div>
</div>

<div class="split">
    <div class="block">
        <h2><span class="ico">🗄️</span>SQL Server and SSIS</h2>
        <p>Maintained nightly SQL Server and SSIS loads for a mortgage lending client:</p>
        <ul>
            <li>Stored procedures</li>
            <li>Table-comparison scripts across loan tables</li>
            <li>SQL Server Agent alerts on the nightly jobs</li>
        </ul>
    </div>
    <div class="block">
        <h2><span class="ico">🔍</span>Analysis and model evaluation</h2>
        <ul>
            <li><b>Hiring funnel:</b> analyzed a 1,000+ applicant funnel stage by stage to model which candidates advance.</li>
            <li><b>Classifier evaluation:</b> designed accuracy tests for a classifier that filled in missing demographic data, replacing a 30-minute manual review per record.</li>
            <li><b>LLM quality:</b> wrote an automated scorer that grades LLM output inside the pipeline.</li>
        </ul>
    </div>
</div>

<div class="block">
    <h2><span class="ico">📝</span>Reports</h2>
    <p>Produced the charts and edited the final documents for a municipal data governance report and a market disparity study, including colorblind-safe visuals and an executive recommendations table.</p>
</div>

<div class="block">
    <h2><span class="ico">🧰</span>Tools</h2>
    <ul class="chips">
        <li>SQL Server (T-SQL)</li><li>SSIS</li><li>SQL Server Agent</li><li>PostgreSQL</li><li>Python</li><li>Airtable</li><li>Heroku</li><li>GitHub Actions</li><li>pytest</li>
    </ul>
</div>

<a class="back" href="/">← Back to portfolio</a>
