# CODEX AGENT: GitHub Pages Website for EmberEye IMVC Conference

You are working with the EmberEye project materials folder. Build and maintain a static GitHub Pages site under `docs/` using the contents of this folder.

## Goal

Create a clean academic project page for:

```text
EmberEye: Real-Time Edge Wildfire Detection
```

The page should be conference-ready, direct, and engineering-focused. It should look like an academic project page, not a startup landing page.

## Constraints

1. Put all website files under `docs/`.
2. Use static HTML, CSS, and JavaScript only.
3. Do not move or rename existing project materials unless the user asks.
4. Use only verified facts from the local report, presentation, and demo assets.
5. Do not invent metrics, private details, job history, phone numbers, addresses, or email addresses.
6. If a CV is not provided, document `docs/assets/roy_cohen_cv.pdf` as a TODO in `docs/README.md`.
7. Keep the site lightweight and easy to edit.

## Required Files

```text
docs/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── assets/
└── README.md
```

## Required Sections

Use a single-page layout with these anchors:

- `#home`
- `#abstract`
- `#system`
- `#method`
- `#results`
- `#demo`
- `#cv`
- `#code`
- `#citation`

## Page Content

Hero:

- Title: `EmberEye: Real-Time Edge Wildfire Detection`
- Subtitle: `A Jetson-based system that uses vision-language AI and semantic classification to detect wildfire and smoke events from a live camera stream.`
- Conference label: `IMVC Conference`
- Authors: Roy Cohen, Itay Hovav
- Advisor: Harel Yadid
- Institution: Technion, Israel Institute of Technology

System story:

```text
Camera
  ↓
wildfire_detection container
  ↓
Vision-Language Model
  ↓
Scene description text
  ↓ UDP
wildfire_classifier container
  ↓
MNLI / zero-shot semantic classification
  ↓
WILDFIRE / NO_WILDFIRE
  ↓ UDP alert
Video overlay + circular buffer + evidence clip
```

Method cards:

1. Scene understanding with compact VILA/VLM variants.
2. UDP text streaming.
3. MNLI semantic classification with `typeform/distilbert-base-uncased-mnli`.
4. Alerting and evidence clip capture.

Results:

- Include only verified local report values.
- Current report-supported values include accuracy 96.77%, recall 100%, precision 96.77%, FPR 3.3%, and FNR 0%.
- Include limitations around fog, smoke-like scenes, VLM hallucinations, and borderline semantic label competition.

Code:

Link to:

```text
https://github.com/roycoh20/wildfire_detection
```

Citation:

```bibtex
@misc{cohen2026embereye,
  title       = {EmberEye: Real-Time Edge Wildfire Detection},
  author      = {Roy Cohen and Itay Hovav},
  year        = {2026},
  institution = {Technion -- Israel Institute of Technology},
  note        = {IMVC conference project page}
}
```

## Asset Guidance

Prefer assets from:

- `demo_recording.webm`
- `final_presentation.pptx`
- `wildfire_detection_presentation.pptx`
- `דוח פרויקט א גילוי שריפות.docx`
- `fire_photos/`
- `solutions/`

Extract Office media into a temporary folder, choose useful images, and copy selected public assets into `docs/assets/`. Do not publish irrelevant screenshots, huge videos, private files, or local machine paths.

## Preview

```bash
cd docs
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish

Use GitHub Pages with source:

```text
main / docs
```

Expected URL:

```text
https://roycoh20.github.io/wildfire_detection/
```
