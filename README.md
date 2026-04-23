# 3D DEM Explorer V4.5

A  web-based 3D Digital Elevation Model (DEM) viewer for terrain visualization.

![Version](https://img.shields.io/badge/version-4.5-blue)
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
  - Greenscreen (Chroma Key) - for the recording feature and the picture feature
  - Dark Mode
  - Light Mode
- **🎮 Dual Navigation Modes**:
  - Ground mode with smoothed, collision-detected physics
  - Flight mode for aerial exploration
- **📐 Realistic Scaling**: Automatic 1:1 scale calculation from GeoTIFF metadata
- **💾 Export Options**:
  - 3D models (.glb format)
  - 4K Reel Studio (9:16 MP4 export)
  - Picture export

### Technical Highlights
- **Chunked Rendering**: Can handle millions of polygons - the higher the detail level, the more polygons. (This will eventually require a backend for smooth rendering since currently it is fully local)
- **Adaptive Precision Smoothing**: Dynamic kernel averaging based on active resolution
- **Smooth Terrain Collision**: Easing-based physics to absorb sharp elevation changes
- **Mobile Optimized**: Touch controls with virtual joystick and look controls

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

### Recommended Settings for Large DEMs
- Application defaults to **High** (512x512) resolution. Drop to Medium/Low for very old hardware
- For files >5GB, use **Low** or **Medium** detail levels
- Enable **Flight Mode** (`F` key) for better overview of large terrains

## 📊 Detail Levels (High detail level requires more processing power and memory)

| Level | Resolution | Polygons | Best For |
|-------|-----------|----------|----------|
| Low | 128×128 | ~16K | Quick preview, mobile devices |
| Medium | 256×256 | ~65K | Balanced performance |
| High | 512×512 | ~260K | Detailed visualization |
| Ultra | 1024×1024 | ~1M | High-end systems |
| Hyper | 2048×2048 | ~4M | Workstation GPUs |
| Extreme | 4096×4096 | ~16M | Maximum detail |

## 🛠️ Technical Architecture

### Memory Management
- **Direct Resampling**: Optimized array-driven reading
- **Large Files (>100M pixels)**: Tiled streaming approach
  - Reads 512×512 tiles sequentially
  - Progressive UI updates to prevent freezing

### Visualization Pipeline
1. **Data Loading**: GeoTIFF parsing via explicit file type checks
2. **Normalization**: Height values uniformly mapped
3. **Adaptive Smoothing** (optional): Resolution-aware blur kernels
4. **Geometry Generation**: Chunked mesh generation specifically aligned for 16-bit WebGL buffers
5. **Vertex Coloring**: Dynamic gradient material assignments

### Performance Optimizations
- Frustum culling on mesh chunks
- Shared materials across chunks
- Deferred vertex normal calculation
- Adaptive pixel ratio for mobile devices

## 📁 File Format Support

### Input Formats
- **GeoTIFF** (.tif, .tiff): Dedicated geographic elevation parser extracting:
  - Pixel scales and real-world dimensions
  - True geographic elevations and normalized limits

### Output Formats
- **GLB** (GL Transmission Format): 3D terrain mesh exported globally
- **MP4 Reels**: Instagram/TikTok-ready 9:16 format cinematic 4K exports

## 🌐 Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | Recommended |
| Firefox | 88+ | Full support |
| Safari | 14+ | iOS 14+ for mobile |
| Edge | 90+ | Chromium-based |

**Requirements:**
- WebGL 2.0 support
- ES6 modules support
- ~2GB RAM for large file processing

## 🎨 Color Schemes Explained

### Grayscale (Heightmap)
Pure representation mapping minimum elevations to black and maximum peaks directly to white, optimal for accurate scientific topological analyses.

### Heatmap
- **Blue** (0-20%): Lowest elevations
- **Cyan** (20-40%): Low areas
- **Green** (40-60%): Mid elevations
- **Yellow** (60-80%): High terrain
- **Red** (80-90%): Higher terrain
- **Magenta** (90-100%): Maximum elevation

## 🔧 Other Features

### Realistic Scale Mode

1. Click "Set Realistic (1:1) Scale"
2. Terrain will automatically reference original real-world metadata constraints
3. Exaggerates bounding proportions precisely corresponding to horizontal distances

### Multiple Background Contexts
Toggle between the standard Sky environment, a dedicated Greenscreen (Chroma Key) space for video editors, and Dark/Light minimalist backdrops directly from the Rendering panel.

## 📝 Known Limitations

- Very large DEMs (>20GB) may require multiple minutes to load
- Export size limited by browser memory (~500MB for GLB files)
- No support for multi-band GeoTIFF (only first band used)

## 🤝 Contributing

This is a demonstration project showcasing advanced web-based terrain visualization. Feel free to:
- Report issues or suggest improvements
- Fork and modify for your own use
- Share interesting DEMs or use cases

## 📄 License

Copyright (c) 2025 Marco Birkedahl Jørgensen

This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.

**You are free to:**
- ✅ Use the code for personal, educational, or research purposes
- ✅ Modify and build upon this work
- ✅ Share and redistribute the code in a non commercial setting
- ✅ Use terrain visualizations and exports created with this tool for any purpose

**Under the following terms:**
- **Attribution**: You must give appropriate credit to Marco Birkedahl Jørgensen
- **NonCommercial**: You may not use this code for commercial purposes without permission

**Commercial Use:** For commercial licensing, please contact the creator.

To view a copy of this license, visit:
http://creativecommons.org/licenses/by-nc/4.0/

## 🙏 Acknowledgments

Built with:
- [Three.js](https://threejs.org/) - 3D rendering engine
- [GeoTIFF.js](https://geotiffjs.github.io/) - GeoTIFF parsing library

## 📧 Contact

**Creator**: Marco Birkedahl Jørgensen

For questions, commercial licensing, or collaboration inquiries, please reach out through the project repository.

---

**Version History:**
- v4.5 (2025): Added flight mode, heatmap visualization, and massive DEM support
- v4.0: GeoTIFF export and realistic scaling
- v3.0: Chunked rendering for high-resolution terrains
- v2.0: GeoTIFF support with metadata parsing
- v1.0: Initial release with basic terrain visualization