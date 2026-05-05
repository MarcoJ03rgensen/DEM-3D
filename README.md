# 3D DEM Explorer V1.0

3D DEM Explorer is a browser-based Digital Elevation Model viewer for exploring GeoTIFF terrain data in interactive 3D.

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-green)
![Platform](https://img.shields.io/badge/platform-browser-informational)

## At a Glance

| What it is | How it runs | Main outputs |
|------------|-------------|--------------|
| Interactive GeoTIFF terrain viewer | Static web app, no build step | PNG, MP4, GLB |

This project runs directly from the HTML, CSS, and browser-side JavaScript in this repository. The workflow is intentionally simple: load a GeoTIFF, adjust the terrain presentation, move through the scene, and export results from the browser.

> Tutorial content will be published soon on @the_danish_archaeologist on YouTube, Instagram, and TikTok.

## Highlights

- View GeoTIFF elevation data in 3D.
- Switch between grayscale, clay, heatmap, custom heatmap, and satellite imagery.
- Use sky blue, greenscreen, dark mode, or light mode environments.
- Move in ground mode or flight mode.
- Apply smooth terrain, realistic 1:1 scaling, and vertical exaggeration.
- Stream large terrains in chunks to keep massive files usable.
- Export high-resolution PNGs, GLB terrain models, or 4K Video Studio videos.
- Use mobile-friendly touch controls and a slide-out settings drawer.

## Controls

### Desktop

| Action | Ground Mode | Flight Mode |
|--------|-------------|-------------|
| Move | `W` `A` `S` `D` | `W` `A` `S` `D` |
| Look | Mouse | Mouse |
| Jump / Ascend | `Space` | `Space` or `E` |
| Run / Descend | `Shift` | `Shift` or `Q` |
| Toggle Flight | `F` | `F` |

Other desktop controls include the GeoTIFF file selector, detail-level dropdown, and export buttons in the side panel.

### Mobile

- Left joystick for movement, with stronger input producing faster travel.
- Touch-and-drag for looking around without conflicting with movement.
- Settings button for showing or hiding the control drawer.
- Quick actions for upload, PNG export, and Video Studio export.
- Separate jump and down buttons for ground and flight movement.

## Detail Levels

| Level | Resolution | Approx. Polygons | Best For |
|-------|------------|------------------|----------|
| Standard | 1024x1024 | 1M | Balanced performance |
| High | 2048x2048 | 4M | More terrain detail |
| Very High | 4096x4096 | 16M | High-end devices |
| Ultra High | 5793x5793 | 32M | Heavier terrain scenes |
| Extreme | 8192x8192 | 64M | Workstation GPUs |
| Extreme+ | 11585x11585 | 128M | Maximum detail |

Custom mode is also available if you want to enter a target polygon count manually.

## Rendering Options

The app shell exposes the following presentation controls:

- Color Style: grayscale, clay, heatmap, custom heatmap, or satellite imagery.
- Background Environment: sky blue, greenscreen, dark mode, or light mode.
- Smooth Terrain: softens harsh surface changes.
- Vertical Exaggeration: increases or reduces terrain relief.
- Realistic Scale: applies a 1:1 scale derived from file metadata when available.
- Chunk Streaming: stream nearby chunks only or load the full DEM chunk set.
- Off-screen Chunk Hiding: reduces clutter when working with large terrains.

## File Support

### Input

- GeoTIFF files: `.tif`, `.tiff`

The app uses file metadata and pixel data to estimate scale, shape, and elevation values.

### Output

- PNG screenshots at high resolution
- MP4 videos from Video Studio
- GLB terrain meshes for 3D workflows

## Video Studio

Video Studio is the cinematic export workflow built into the app. It supports portrait or landscape framing, higher-quality supersampling, and configurable encoding settings.

Key behaviors include:

- 9:16 portrait and 16:9 landscape output.
- H.264-compatible export mode and a higher-bitrate H.265 master mode.
- Supersampling where the GPU budget allows it.
- A personal watermark overlay for exported videos (if needed)

## Local Use

1. Open `index.html` in a modern browser, or serve the folder with any static web server.
2. Upload a GeoTIFF file from the app UI.
3. Adjust visualization, movement mode, and export settings as needed.

Recommended browsers are current Chromium-based browsers, since the app relies on modern browser APIs for 3D rendering and export features.

## Credits

If you need to describe how figures, videos, pictures, or 3D models were made, you can cite this repository or use: `DEM-3D Explorer V1.0, Marco Jørgensen (2026)`.

## License

Copyright (c) 2026 Marco Jørgensen

This work, DEM-3D Explorer V1.0, is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.

