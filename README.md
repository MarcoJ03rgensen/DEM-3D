# 3D DEM Explorer V4.6

A web-based 3D Digital Elevation Model (DEM) viewer for terrain visualization.

![Version](https://img.shields.io/badge/version-4.6-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-green)

## 🌟 Features

### Core Capabilities
- **🗺️ GeoTIFF**: Upload and instantly visualize GeoTIFF (.tif/.tiff) elevation files
- **🚀 Massive File Handling**: Process DEMs using intelligent tiled streaming
- **🎨 Multiple Visualization Styles**:
  - Grayscale (Raw Height - Default)
  - Clay (Neutral)
  - Heatmap (Detailed elevation gradient)
- **🖼️ Configurable Environments**:
  - Sky Blue
  - Greenscreen (Chroma Key) - for recording and composite work
  - Dark Mode
  - Light Mode
- **🎮 Dual Navigation Modes**:
  - Ground mode with smoothed, collision-detected physics
  - Flight mode for aerial exploration
- **📐 Realistic Scaling**: Automatic 1:1 scale calculation from GeoTIFF metadata
- **💾 Export Options**:
  - **4K Reel Studio**: High-end cinematic video export (MP4)
  - **3D Model**: (.glb format)
  - **4K PNG**: High-fidelity static image export

### 🎬 4K Reel Studio (Pro Video Export)
- **Multi-Format Support**: Switch between **9:16 Portrait** (Reels/TikTok) and **16:9 Landscape** (YouTube/Desktop).
- **Ultra-Sharp Rendering**: Uses **2x Supersampling** to render frames at 8K internal resolution before downscaling, ensuring every frame matches the crispness of a high-end PNG export.
- **Cinematic Motion Blur**: Accumulation-based rendering (up to 16 samples) for professional motion trails.
- **High Bitrate**: 80 Mbps H.264 encoding for broadcast-quality output.
- **Custom Watermarking**: Dynamic text overlay with automatic positioning.

### Technical Highlights
- **Chunked Rendering**: Handles millions of polygons via a distributed geometry pipeline.
- **Adaptive Precision Smoothing**: Dynamic kernel averaging based on active resolution.
- **Smooth Terrain Collision**: Easing-based physics to absorb sharp elevation changes.
- **Mobile Optimized**: Touch controls with virtual joystick and look controls.

## 🎮 Controls

### Desktop
| Action | Ground Mode | Flight Mode |
|--------|-------------|-------------|
| Move | `W` `A` `S` `D` | `W` `A` `S` `D` |
| Look | Mouse | Mouse |
| Jump / Ascend | `Space` | `Space` or `E` |
| Run / Descend | `Shift` | `Shift` or `Q` |
| Toggle Flight | `F` | `F` |

### Mobile
- **Left Joystick**: Move horizontally
- **Touch & Drag**: Look around
- **UP Button**: Jump (ground) / Ascend (flight)
- **DOWN Button**: Descend (flight mode only)

## 📊 Detail Levels

| Level | Resolution | Polygons | Best For |
|-------|-----------|----------|----------|
| Low | 128×128 | ~16K | Quick preview, mobile devices |
| Medium | 256×256 | ~65K | Balanced performance |
| High | 512×512 | ~260K | Detailed visualization |
| Ultra | 1024×1024 | ~1M | High-end systems |
| Hyper | 2048×2048 | ~4M | Workstation GPUs |
| Extreme | 4096×4096 | ~16M | Maximum detail |

## 🛠️ Technical Architecture

### 📹 Video Encoding (WebCodecs)
The engine utilizes the **WebCodecs API** and **Mp4Muxer.js** for hardware-accelerated H.264 encoding directly in the browser. It bypasses standard canvas capture limitations to produce high-bitrate files that are compatible with professional editing software.

### Memory Management
- **Direct Resampling**: Optimized array-driven reading.
- **Tiled Streaming**: Progressive loading for massive files to prevent browser freezing.

## 📁 File Format Support

### Input Formats
- **GeoTIFF** (.tif, .tiff): Extracts pixel scales, real-world dimensions, and geographic elevations.

### Output Formats
- **MP4 Videos**: Cinematic 4K exports in 9:16 or 16:9 with supersampling.
- **GLB**: 3D terrain mesh export.
- **PNG**: High-quality 4K screenshots.

## 📄 License

Copyright (c) 2025 Marco Birkedahl Jørgensen
Licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.

---

**Version History:**
- **v4.6 (2025)**: Added 16:9 Landscape support, 2x Supersampled Video Rendering, and Motion Blur.
- **v4.5**: Added flight mode, heatmap visualization, and massive DEM support.
- **v4.0**: GeoTIFF export and realistic scaling.
- **v3.0**: Chunked rendering for high-resolution terrains.
- **v2.0**: GeoTIFF support with metadata parsing.
- **v1.0**: Initial release.