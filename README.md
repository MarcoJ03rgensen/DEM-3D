# 3D DEM Explorer V5.0

A web-based 3D Digital Elevation Model (DEM) viewer for terrain visualization.

![Version](https://img.shields.io/badge/version-5.0-blue)
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
- **📱 Mobile V5 Overhaul**: Complete mobile-first redesign with touch-optimized settings drawer, quick-action toolbars (PNG/Upload/Reel shortcuts), and precision multi-touch navigation.

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
- **Left Joystick**: Proportional movement (slide farther to sprint)
- **Touch & Drag**: Precision look around (multi-touch separated from joystick)
- **⚙️ Settings Button**: Slide-out configuration drawer
- **📂 Quick Bar**: One-tap shortcuts for Upload, 4K PNG, and Reel Studio
- **JUMP Button**: Jump (ground) / Ascend (flight)
- **DOWN Button**: Descend (flight mode only)
- **✈️ Flight Button**: Instant flight mode toggle with visual status

## 📊 Detail Levels

| Level | Resolution | Polygons | Best For |
|-------|-----------|----------|----------|
| Standard | 1024×1024 | ~1M | Balanced performance, default |
| High | 2048×2048 | ~4M | Detailed visualization |
| Very High | 4096×4096 | ~16M | High-end systems |
| Extreme | 8192×8192 | ~64M | Workstation GPUs |
| Extreme+ | 11585×11585 | ~128M | Maximum detail |

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
- **v5.0 (2025)**: **Next-Gen Mobile Overhaul**. Added touch-optimized quick bars, settings drawer, multi-touch precision look, proportional joystick movement, and mobile-friendly cinema mode.
- **v4.6**: Added 16:9 Landscape support, 2x Supersampled Video Rendering, and Motion Blur.
- **v4.5**: Added flight mode, heatmap visualization, and massive DEM support.
- **v4.0**: GeoTIFF export and realistic scaling.
- **v3.0**: Chunked rendering for high-resolution terrains.
- **v2.0**: GeoTIFF support with metadata parsing.
- **v1.0**: Initial release.