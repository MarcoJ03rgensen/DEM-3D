# 3D DEM Explorer V4.5

A high-performance web-based 3D Digital Elevation Model (DEM) viewer with advanced terrain visualization, flight mode, and support for massive GeoTIFF files.

![Version](https://img.shields.io/badge/version-4.5-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-green)

## 🌟 Features

### Core Capabilities
- **🗺️ Multi-Format Support**: Upload GeoTIFF (.tif/.tiff) files or standard images (PNG, JPEG, WebP)
- **🚀 Massive File Handling**: Process DEMs up to 15GB+ using intelligent tiled streaming
- **🎨 Multiple Visualization Styles**:
  - Nature (Snow/Rock/Grass)
  - Scientific (Atlas Colors)
  - Grayscale (Raw Height)
  - Clay (Neutral)
  - Heatmap (Detailed elevation gradient)
- **🎮 Dual Navigation Modes**:
  - Ground mode with realistic physics and collision detection
  - Flight mode for aerial exploration
- **📐 Realistic Scaling**: Automatic 1:1 scale calculation from GeoTIFF metadata
- **💾 Export Options**:
  - 3D models (.glb format)
  - Procedurally generated terrains as GeoTIFF

### Technical Highlights
- **Chunked Rendering**: Efficiently handles millions of polygons (up to 16M at Extreme detail)
- **Adaptive Memory Management**: Automatic downsampling and tiled reading for large files
- **Real-time Terrain Collision**: Accurate height-based physics
- **Conditional Water Rendering**: Water only appears where elevation data indicates
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

## 🚀 Quick Start

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)
2. Click "Click to Start" to enable controls
3. Choose your terrain source:
   - **Upload GeoTIFF/Image**: Use your own elevation data
   - **Generate Geo-World**: Create a procedural terrain

### Recommended Settings for Large DEMs
- Start with **Medium** (256x256) resolution
- For files >5GB, use **Low** or **Medium** detail levels
- Enable **Flight Mode** (`F` key) for better overview of large terrains

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

### Memory Management
- **Small Files (<100M pixels)**: Direct resampling with fallback mechanism
- **Large Files (>100M pixels)**: Tiled streaming approach
  - Reads 512×512 tiles sequentially
  - Two-pass processing (sampling for min/max, then full read)
  - Progressive UI updates to prevent freezing

### Visualization Pipeline
1. **Data Loading**: GeoTIFF parsing or image conversion
2. **Normalization**: Height values mapped to 0-1 range
3. **Smoothing** (optional): 3×3 kernel averaging
4. **Geometry Generation**: Chunked mesh creation (256×256 vertex chunks)
5. **Vertex Coloring**: Style-based color assignment per vertex
6. **Water Detection**: Automatic placement if elevation < 15% threshold

### Performance Optimizations
- Frustum culling on mesh chunks
- Shared materials across chunks
- Deferred vertex normal calculation
- Adaptive pixel ratio for mobile devices

## 📁 File Format Support

### Input Formats
- **GeoTIFF** (.tif, .tiff): Full metadata support including:
  - Pixel scale (meters per pixel)
  - Geographic coordinates
  - Elevation min/max values
- **Standard Images** (.png, .jpg, .webp): Grayscale interpreted as elevation

### Output Formats
- **GLB** (GL Transmission Format): 3D terrain mesh with vertex colors
- **GeoTIFF**: Procedurally generated terrains (from random generation only)

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

### Nature
- **Sand** (0-15%): Beach/lowland areas
- **Grass** (15-40%): Vegetation zones with subtle variation
- **Rock** (40-70%): Mountain slopes with random darkness
- **Snow** (70-100%): High peaks

### Heatmap
- **Blue** (0-20%): Lowest elevations
- **Cyan** (20-40%): Low areas
- **Green** (40-60%): Mid elevations
- **Yellow** (60-80%): High terrain
- **Red** (80-90%): Very high peaks
- **Magenta** (90-100%): Maximum elevation

## 🔧 Advanced Features

### Realistic Scale Mode
When using GeoTIFF files with proper metadata:
1. Click "Set Realistic (1:1) Scale"
2. Terrain will automatically adjust vertical exaggeration to match real-world proportions
3. Displays actual width in kilometers and height range in meters

### Procedural Terrain Generation
- Uses multi-octave Perlin noise with ridge filtering
- Combines base terrain with mountain ridge features
- Exports as standard GeoTIFF with 0-800m elevation range

## 📝 Known Limitations

- Very large DEMs (>20GB) may require multiple minutes to load
- Export size limited by browser memory (~500MB for GLB files)
- Water plane is global (doesn't follow complex coastlines)
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
- ✅ Share and redistribute the code
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