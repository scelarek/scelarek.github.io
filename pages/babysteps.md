<div align="center">

<h1><a href="https://www.makebabysteps.com/">Baby Steps IVF</a></h1>

<h2>Sam Celarek · Cofounder &amp; Data Analyst · Aug 2023 – Sep 2026</h2>
</div>

<div align="center" style="background-color: #CFF2FB; padding: 15px; border-radius: 10px;">
Patients choosing an IVF clinic see raw success rates, and those rates reward clinics for treating easier patients.
Baby Steps compares clinics on outcomes adjusted for the patients each clinic actually treats.
</div>

---

## 🎯 What it does

Baby Steps IVF ([makebabysteps.com](https://www.makebabysteps.com/)) helps people compare US fertility clinics fairly. I built the data foundation and the statistical models behind it, set product priorities, and coordinated two developers against a weekly release.

---

## 📊 Data

- **Over 3 million IVF cycles** from 400+ US clinics, from the national SART registry.
- **28 years of CDC clinic reports**, harmonized across reporting formats that changed over time.
- Census and community-health covariates, so comparisons aren't driven by differences in the populations clinics serve.
- **IVF prices**: CPT/HCPCS rates pulled from hospital price-transparency files and insurer Transparency-in-Coverage files and matched to clinics, alongside prices from clinic websites and patient reports.

---

## 🔗 Record linkage

Clinics rebrand, merge and sometimes register twice. I linked SART and CDC clinic records across rebrands, mergers and duplicate registrations, and logged the evidence behind every match decision so each one can be reviewed.

---

## 🧹 Pipeline and data quality

- A weekly Python pipeline that pulls, cleans and joins every source into one research database, then publishes it to PostgreSQL (Supabase) with a hosted prediction API.
- Consistency checks that re-certify every clinic-year on each refresh, before anything reaches the site.
- Review gates that hold disputed records for a human decision instead of publishing them.

---

## 💠 Modeling

- **Risk adjustment:** Bayesian hierarchical models adjust each clinic's success rates for patient age and case mix, so clinics treating harder cases aren't penalized.
- **Validation:** trained on 2014–2022 and validated on held-out 2023–24 data.
- **The IVF funnel:** each cycle is modeled stage by stage, from egg retrieval to embryo transfer to live birth, to show where each clinic's patients drop off.
- Gradient-boosted baselines (XGBoost/LightGBM) with walk-forward validation for comparison.

---

## 🧰 Tools

Python (pandas, Polars, NumPy, PyMC, XGBoost) · SQL · DuckDB · SQLite · PostgreSQL (Supabase) · Modal · Git/GitHub · GitHub Actions CI

<div align="center">

[← Back to portfolio](https://scelarek.github.io)

</div>
