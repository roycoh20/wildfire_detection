# EmberEye GitHub Pages Site

This folder contains a static GitHub Pages project page for EmberEye.

## Preview locally

```bash
cd docs
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

On Windows, `py -m http.server 8000` also works from this folder.

## Publish on GitHub Pages

1. Push the `docs/` folder to `main`.
2. Go to the GitHub repository settings.
3. Open Pages.
4. Set source to `Deploy from a branch`.
5. Select branch `main`.
6. Select folder `/docs`.
7. Save.
8. The website should appear at:

```text
https://roycoh20.github.io/wildfire_detection/
```

## Asset Notes

Assets used by the page:

- `project_teaser.jpg`: copied from `fire_photos/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg`.
- `pipeline_demo.png`: extracted from `wildfire_detection_presentation.pptx`.
- `confusion_matrix.png`: extracted from `דוח פרויקט א גילוי שריפות.docx`.
- `sd_express_graph_1.png`: extracted from `wildfire_detection_presentation.pptx`.
- `sd_express_graph_2.png`: extracted from `wildfire_detection_presentation.pptx`.
- `jetson_orin_nano.png`: extracted from `wildfire_detection_presentation.pptx`.
- `demo_recording.webm`: copied from the project folder root.
- `project_report.docx`: copied from the project folder root.
- `final_presentation.pptx`: copied from the project folder root.

## TODO

- Add `docs/assets/roy_cohen_cv.pdf` only after the CV file is explicitly provided.
- Replace or add an official architecture image if one is exported from the final presentation.
- Confirm the exact IMVC year before publishing if it should be shown more specifically than "IMVC Conference".
