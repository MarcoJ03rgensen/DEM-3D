# 3D DEM Explorer V1.0

3D DEM Explorer is a browser-based Digital Elevation Model viewer for exploring GeoTIFF terrain data in interactive 3D.

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-green)

## Overview

This project is a static web app. There is no build step or package manager dependency; the site runs directly from the HTML, CSS, and browser-side JavaScript in this repository.

The current app focuses on a fast single-page workflow: load a GeoTIFF, tune the terrain presentation, move through the scene, and export results directly from the browser.

## Tutorial
A tutorial will be available soon on @the_danish_archaeologist on youtube, instagram and tiktok.

## Features

- Upload GeoTIFF files and visualize elevation data in 3D.
- Choose from grayscale, clay, heatmap, custom heatmap, and satellite imagery rendering.
- Toggle between sky blue, greenscreen, dark mode, and light mode backgrounds.
- Switch between ground mode and flight mode for different navigation styles.
- Enable smooth terrain, realistic 1:1 scaling, and adjustable vertical exaggeration.
- Stream large terrains in chunks so massive files remain usable in the browser.
- Export terrain as a GLB model, a high-resolution PNG image, or a 4K Reel Studio video.
- Use the mobile layout with touch controls, quick actions, and a slide-out settings drawer.

## Controls

### Desktop

| Action | Ground Mode | Flight Mode |
|--------|-------------|-------------|
| Move | `W` `A` `S` `D` | `W` `A` `S` `D` |
| Look | Mouse | Mouse |
| Jump / Ascend | `Space` | `Space` or `E` |
| Run / Descend | `Shift` | `Shift` or `Q` |
| Toggle Flight | `F` | `F` |

Other desktop controls in the UI include drag-and-drop style file upload through the GeoTIFF selector, the detail-level dropdown, and the export buttons in the side panel.

### Mobile

- Left joystick for movement, with stronger input producing faster travel.
- Touch-and-drag for looking around without conflicting with movement.
- Settings button for showing or hiding the control drawer.
- Quick actions for upload, PNG export, and Reel Studio export.
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

You can also choose Custom and enter a target polygon count manually.

## Rendering

The rendering controls expose the options used by the app shell:

- Color Style: grayscale, clay, heatmap, custom heatmap, or satellite imagery.
- Background Environment: sky blue, greenscreen, dark mode, or light mode.
- Smooth Terrain: reduces harsh surface changes.
- Vertical Exaggeration: increases or reduces terrain relief.
- Realistic Scale: applies a 1:1 scale derived from file metadata when available.
- Chunk Streaming: lets you stream nearby chunks only or load the full DEM chunk set.
- Off-screen Chunk Hiding: reduces clutter when working with large terrains.

## File Support

### Input

- GeoTIFF files: `.tif`, `.tiff`

The app uses the file metadata and pixel data to estimate scale, shape, and elevation values.

### Output

- PNG screenshots at high resolution
- MP4 videos from Reel Studio
- GLB terrain meshes for 3D workflows

## Reel Studio

Reel Studio is the app's video export workflow. It is designed for cinematic captures and supports portrait or landscape framing, higher-quality supersampling, and configurable encoding settings.

Key behaviors in the current app include:

- 9:16 portrait and 16:9 landscape output.
- H.264-compatible export mode and a higher-bitrate H.265 master mode.
- Supersampling where the GPU budget allows it.
- A watermark overlay for exported reels.

## Local Use

1. Open `index.html` in a modern browser, or serve the folder with any static web server.
2. Upload a GeoTIFF file from the app UI.
3. Adjust visualization, movement mode, and export settings as needed.

If you want to test the site locally with a server, a simple static server is enough because the project does not require a build step.

Recommended browsers are current Chromium-based browsers, since the app relies on modern browser APIs for 3D rendering and export features.

## Credits

In case you need to explain how your figures (videos, pictures, 3D models) were made you can cite this repo or:"DEM-3D Explorer V1.0, Marco Jørgensen (2026)"

## License

Copyright (c) 2026 Marco Jørgensen

This work, DEM-3D Explorer V1.0, is licensed under the Creative Commons Attribution-NonCommercial 4.0 
International License.

