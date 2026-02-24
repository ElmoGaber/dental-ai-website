# 🦷 Dental AI Detection (YOLO)

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![YOLO](https://img.shields.io/badge/Model-YOLO_Detection-yellow?logo=target)](https://pjreddie.com/darknet/yolo/)
[![pnpm](https://img.shields.io/badge/Package_Manager-pnpm-orange?logo=pnpm)](https://pnpm.io/)

A cutting-edge **Dental Health Diagnostics** platform built with **Next.js** and **TypeScript**. This application integrates **YOLO (You Only Look Once)** object detection models to identify dental pathologies, cavities, and abnormalities from X-rays and dental images with high speed and precision.

---

## 🚀 Key Features

* **🔍 YOLO-Powered Detection**: Real-time identification of dental issues using state-of-the-art object detection.
* **📸 X-Ray Analysis**: Upload and process dental radiographs to highlight areas of concern automatically.
* **⚡ High-Speed Inference**: Optimized for fast performance to provide instant diagnostic support.
* **🎯 Precision Labeling**: Accurate bounding boxes and confidence scores for various dental conditions.
* **📱 Clinician Dashboard**: A professional interface designed for dentists and healthcare providers.
* **🎨 Specialized UI**: Clean, medical-grade design built with Tailwind CSS for maximum clarity.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Detection Model** | YOLO (Object Detection) |
| **Styling** | Tailwind CSS + Shadcn/UI |
| **State/Logic** | Custom ML Hooks & Image Processing |

---

## 📂 Project Structure

```text
├── app/             # Application routes and diagnostic pages
├── components/      # UI components (Viewer, Detection Canvas, etc.)
├── hooks/           # YOLO model loading and inference logic
├── lib/             # Image processing and medical utilities
├── public/          # Static assets and model weight files
└── styles/          # Global styles and Tailwind configurations
