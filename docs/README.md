# GitHub Pages Site

This folder contains the static IMVC conference site for the real-time edge wildfire detection project.

## Pages

- `index.html`: landing page with project, author, LinkedIn, and CV entry points.
- `project.html`: full project information page with technical overview, reported results, SD Express report summary, and presentation placeholder.

## Preview locally

```bash
cd docs
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

On Windows, this also works after Python is installed:

```powershell
py -m http.server 8000
```

## Publish on GitHub Pages

Use:

```text
Settings -> Pages -> Deploy from branch -> main -> /docs
```

Expected public URL:

```text
https://roycoh20.github.io/wildfire_detection/
```

## Current Public Assets

- `assets/images/project_teaser.jpg`
- `assets/images/jetson_orin_nano.png`
- `assets/images/pipeline_demo.png`
- `assets/images/sd_express_read_throughput.png`
- `assets/images/sd_express_swap_usage.png`

## Materials Folder Status

No current `materials`, `materials/current`, `materials_current`, or `materials current` folder was found in the repository snapshot used for this update. CVs, LinkedIn URLs, author photos, the SD Express PDF, and the final presentation remain placeholders until those files are added.

## Hidden or Removed From Public Site

- The unfinished Hebrew Project A report is not linked, summarized, or used as a public source.
- The previous report document asset was removed from `docs/assets`.
- The previous presentation asset was removed from `docs/assets` until a final complete version is provided.
- The old confusion matrix image was removed because it came from the unfinished Project A report.
- The old demo video asset was removed from the public Pages folder because the new public structure does not include a demo section.

## TODO

- TODO: Add Roy Cohen LinkedIn URL.
- TODO: Add Itay Hovav LinkedIn URL.
- TODO: Add Roy Cohen CV at `docs/assets/cv/roy_cohen_cv.pdf`.
- TODO: Add Itay Hovav CV at `docs/assets/cv/itay_hovav_cv.pdf`.
- TODO: Add Roy Cohen photo at `docs/assets/images/roy_cohen.jpg`.
- TODO: Add Itay Hovav photo at `docs/assets/images/itay_hovav.jpg`.
- TODO: Add the final SD Express report PDF at `docs/assets/reports/sd_express_student_challenge_report.pdf`.
- TODO: Add final project presentation PDF at `docs/assets/reports/project_presentation.pdf`.
- TODO: Verify final exact VLM model version before conference.
- TODO: Verify final exact camera resolution/FPS before conference.
- TODO: Verify final JetPack / Jetson Linux version if not explicit in repo.
