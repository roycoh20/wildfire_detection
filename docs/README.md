# GitHub Pages Site

This folder contains the static IMVC conference page for the real-time edge wildfire detection project.

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

1. Push the `docs/` folder to `main`.
2. Go to repository **Settings**.
3. Open **Pages**.
4. Select **Deploy from a branch**.
5. Select branch **main**.
6. Select folder **/docs**.
7. Save.

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

## Hidden or Removed From Public Site

- The unfinished Hebrew Project A report is not linked, summarized, or used as a public source.
- The previous report document asset was removed from `docs/assets`.
- The previous presentation asset was removed from `docs/assets` until a final complete version is provided.
- The old confusion matrix image was removed because it came from the unfinished Project A report.
- The old demo video asset was removed from the public Pages folder because the new public structure does not include a demo/presentation section.

## TODO

- Add Roy Cohen CV at `docs/assets/cv/roy_cohen_cv.pdf`.
- Add Itay Hovav CV at `docs/assets/cv/itay_hovav_cv.pdf`.
- Add the final SD Express report PDF at `docs/assets/reports/sd_express_student_challenge_report.pdf`.
- Add final Project A presentation only when the complete version is provided.
- Verify exact VLM model version used in the final demo.
- Verify exact camera resolution/FPS used in the final demo.
