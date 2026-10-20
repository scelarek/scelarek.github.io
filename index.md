<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        /* Reset some default browser styles */
        body, h2, p {
            margin: 0;
            padding: 0;
        }
        /* Global styles */
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #fff;
            padding: 40px 20px;
            color: #333;
        }
        h2 {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            color: #555;
            margin-bottom: 20px;
        }
        a {
            color: #007BFF;
            text-decoration: underline; /* Added underline to all links */
        }
        a:hover {
            text-decoration: underline;
            opacity: 0.9;
            transform: translateY(-3px); /* Added matching hover behavior */
        }
        .project-content {
            background-color: #E6FFF1;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            margin-bottom: 30px;
        }
        .project-description {
            font-size: 0.9em;
            margin: 5px 0;
        }
        .view-project {
            display: inline-block;
            background-color: #25A18E;
            padding: 10px 10px;
            border-radius: 15px;
            color: white;
            font-weight: bold;
            margin: 10px 0;
            font-family: 'Poppins', sans-serif; /* Changed font for better legibility */
            transition: all 0.3s ease;
        }
        .view-project:hover {
            opacity: 0.9;
            transform: translateY(-3px); /* Matching hover behavior */
        }
        .project-content:first-child {
            background-color: #CFF2FB; /* Changed the background color for the Featured Project */
        }
        .project-content:first-child .view-project {
            background-color: #00A5CF; /* Changed the background color for the Featured Project's view project link */
        }
        .footer-quote {
            text-align: center;
            background-color: #F3FFF8;
            padding: 20px;
            border-radius: 5px;
            margin-top: 30px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            font-style: italic;
        }
    </style>
</head>

<body>
    <section>
        <div class="project-content">
            <h2><a href="/pages/babysteps.html" class="view-project">Featured: Baby Steps IVF</a></h2>
            <p class="project-description">Cofounder &amp; Data Analyst, 2023&ndash;2026. Compares 400+ US fertility clinics on outcomes adjusted for the patients each clinic treats, using over 3 million IVF cycles and 28 years of CDC reports.</p>
            <p class="project-description">Bayesian Hierarchical Models &bull; Risk Adjustment &bull; Record Linkage &bull; Price Transparency Data &bull; Python &bull; SQL &bull; PostgreSQL &bull; Data Pipelines</p>
            <p class="project-description"><a href="https://www.makebabysteps.com/">makebabysteps.com</a></p>
        </div>
        <div class="project-content">
            <h2><a href="/pages/nerevu.html" class="view-project">Nerevu Group: Data Analyst</a></h2>
            <p class="project-description">2023&ndash;2026. Production SQL Server, SSIS and Python pipelines, model evaluation and client reporting.</p>
            <p class="project-description">SQL Server &bull; SSIS &bull; Stored Procedures &bull; Python &bull; PostgreSQL &bull; CI &amp; Testing &bull; Funnel Analysis &bull; Data Visualization</p>
        </div>
        <div class="project-content">
            <h2><a href="/pages/quality.html" class="view-project">Clinical Quality Improvement</a></h2>
            <p class="project-description">Eight years as a nurse, including four on a hospital quality and safety council, two as chair. Central line infections fell 41%.</p>
            <p class="project-description">Quality Metrics &bull; Chart Audits &bull; Epic &bull; Process Improvement &bull; Leadership</p>
        </div>
        <div class="project-content">
            <h2><a href="/pages/bootcamp.html" class="view-project">Earlier Projects (2023)</a></h2>
            <p class="project-description">BrainStation data science projects: CovidCast forecasting, NLP, classification, dashboards and more.</p>
        </div>
        <div class="project-content">
            <h2><a href="https://portlandear.wordpress.com/" class="view-project">Effective Altruism Portfolio</a></h2>
            <p class="project-description">Community Building &bull; Leadership &bull; Agenda Setting &bull; Volunteer Work &bull; Presentations &bull; Outreach &bull; Philosophy &bull; Economics &bull; Research</p>
        </div>
        <div>
            <p class="footer-quote">“You can't actually feel the weight of the world. The human mind is not capable of that feat. 
            But sometimes, you can catch a glimpse.” <br> ― Nates Soares, On Caring</p>
        </div>
    </section>
</body>


</html>
