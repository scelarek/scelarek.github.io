<div class="page-hero">
    <p class="eyebrow">Data Analyst · Oct 2023 – present</p>
    <h1>Nerevu Group</h1>
    <p class="sub">Nerevu Group LLC · Peoria, Illinois · worked remotely from Portland, OR</p>
    <p class="lede">Production pipelines, financial data integration, model evaluation, dashboards and published reports, across internal tools and client projects.</p>
    <div class="stats">
        <div class="stat"><b>18</b><span>pipeline steps, sole programmer</span></div>
        <div class="stat"><b>~1,000</b><span>tests in CI</span></div>
        <div class="stat"><b>30 → 1</b><span>minutes of lead prep</span></div>
    </div>
</div>

<h2 class="section-title">What I worked on</h2>
<ul class="chips">
    <li><a href="#pipeline">Government contracting pipeline</a></li><li><a href="#ci">CI &amp; testing</a></li><li><a href="#ssis">Financial data integration</a></li><li><a href="#funnel">Hiring funnel analysis</a></li><li><a href="#dashboards">ATS &amp; CRM dashboards</a></li><li><a href="#models">Classifier &amp; LLM evaluation</a></li><li><a href="#reports">Reports &amp; infographics</a></li>
</ul>

<div class="block" id="pipeline">
    <h2><span class="ico">⚙️</span>Government contracting pipeline</h2>
    <p>I was the sole programmer on an 18-step Python, PostgreSQL and Airtable pipeline on Heroku that turns raw government contracting data into ready-to-use leads for Nerevu's internal team.</p>
    <div class="flow">
        <div class="step"><b>Collect</b>REST APIs, web scraping, PDF and XFA extraction</div>
        <div class="arrow">→</div>
        <div class="step"><b>Enrich</b>LLM summarization, graded by an automated quality scorer</div>
        <div class="arrow">→</div>
        <div class="step"><b>Store</b>PostgreSQL, synced to Airtable for the team</div>
        <div class="arrow">→</div>
        <div class="step"><b>Report</b>Ready-to-use leads in about a minute</div>
    </div>
</div>

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

<div class="block" id="ci">
    <h2><span class="ico">🧪</span>CI &amp; testing: fixes that stay fixed</h2>
    <p>I set up the project's error logging and its first CI, which grew to about 1,000 tests. Every production error followed the same loop, so a problem couldn't quietly come back.</p>
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
    <div class="block" id="ssis">
        <h2><span class="ico">🏦</span>Financial data integration</h2>
        <p>Kept a mortgage lending client's production SQL Server and SSIS integration running every night.</p>
        <ul>
            <li>Stored procedures for the nightly loads</li>
            <li>Dynamic table-comparison scripts across 268-column loan tables, reconciling each load against source</li>
            <li>SQL Server Agent job monitoring with SQL and SMS alerts when a load failed</li>
        </ul>
    </div>
    <div class="block" id="funnel">
        <h2><span class="ico">🔻</span>Hiring funnel analysis</h2>
        <p>Analyzed Nerevu's internal 1,000+ applicant hiring funnel stage by stage, and modeled which candidates advance to the next stage.</p>
    </div>
</div>

<div class="split">
    <div class="block" id="dashboards">
        <h2><span class="ico">📊</span>ATS &amp; CRM dashboards</h2>
        <p>Customized Nerevu's internal applicant tracking system (ATS) and CRM dashboards.</p>
    </div>
    <div class="block" id="models">
        <h2><span class="ico">🔍</span>Classifier &amp; LLM evaluation</h2>
        <ul>
            <li><b>Research on people:</b> designed the accuracy tests that decided whether a name-based demographic classifier was fit to report on in a market disparity study. It replaced a 30-minute manual review per record.</li>
            <li><b>LLM quality:</b> wrote an automated scorer that grades LLM output inside the production pipeline, before anything downstream uses it.</li>
        </ul>
    </div>
</div>

<div class="block" id="reports">
    <h2><span class="ico">📝</span>Reports &amp; infographics</h2>
    <p>Produced the infographics and charts, and edited the final documents, for two government reports:</p>
    <ul>
        <li><b>Municipal data governance study</b></li>
        <li><b>Market disparity study</b>, with colorblind-safe visuals and an executive recommendations table</li>
    </ul>
</div>

<div class="block">
    <h2><span class="ico">🧰</span>Tools</h2>
    <ul class="chips">
        <li>Python</li><li>PostgreSQL</li><li>SQL Server (T-SQL)</li><li>SSIS</li><li>SQL Server Agent</li><li>Airtable</li><li>Heroku</li><li>REST APIs</li><li>Web scraping</li><li>LLMs</li><li>GitHub Actions</li><li>pytest</li>
    </ul>
</div>

<a class="back" href="/">← Back to portfolio</a>
