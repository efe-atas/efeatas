import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "efeatas // work",
  description: "Find a list of all my projects here.",
};

export default function WorkPage() {

  return (
    <section>

      <h2 className="text-xl font-bold pb-4">Education</h2>
      <div className="mb-6">
        <p className="font-semibold">TED University (Full Scholarship)</p>
        <p>BS Computer Engineering, Minor Business Management | GPA: 3.45 | Ankara, Turkey | Aug 2022 – May 2026</p>
      </div>

      <h2 className="text-xl font-bold pb-4">Experience</h2>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Image src="/images/havelsan-logo.png" alt="HAVELSAN Logo" width={200} height={200} className="mr-4" />
          <h3 className="font-semibold">Big Data & AI Intern, HAVELSAN AS</h3>
        </div>
        <p>Ankara | Jul 2025 – Sep 2025</p>
        <ul className="list-disc pl-5">
          <li>Spearheaded an end-to-end audio classification system, combining deep learning, audio signal processing, and full-stack deployment.</li>
          <li>Engineered a fully custom audio dataset collection pipeline using the YouTube API and YAMNet.</li>
          <li>Trained and optimized various deep learning models, including VGG16, ResNet, and custom CNN architectures.</li>
          <li>Designed and deployed a modern, responsive UI with React.js and Ant Design, and FastAPI backend.</li>
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Image src="/images/tubitak.png" alt="TUBITAK Logo" width={180} height={180} className="mr-4 block dark:hidden" />
          <Image src="/images/tubitak_dark_mode.png" alt="TUBITAK Logo" width={200} height={180} className="mr-4 hidden dark:block" />
          <h3 className="font-semibold">TUBITAK 2247-C Undergraduate Research Assistant</h3>
        </div>
        <p>ODTU TEKNOKENT, Ankara | Sep 2024 – May 2025</p>
        <ul className="list-disc pl-5">
          <li>Developed a responsive web application using React.js for real-time monitoring of livestock behavior.</li>
          <li>Implemented a YOLOv11-based object detection system for cattle behavior classification.</li>
          <li>Integrated a 3D Convolutional Neural Network (3D-CNN) for temporal features extraction.</li>
          <li>Explored and fine-tuned multi-object tracking algorithms including ByteTrack and BoT-SORT.</li>
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <h3 className="font-semibold">Flutter Developer Intern, Limak Teknoloji Yazılım Savunma Sanayi ve Ticaret AS</h3>
        </div>
        <p>Bilkent CYBERPARK, Ankara | Jun 2024 – Aug 2024</p>
        <ul className="list-disc pl-5">
          <li>Designed and developed responsive, cross-platform mobile UIs using Flutter and Dart.</li>
          <li>Built modular components and applied advanced state management techniques.</li>
          <li>Integrated RESTful APIs for real-time data handling.</li>
          <li>Developed a face recognition application with OpenAI API for hairstyle suggestions.</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold pb-4">Projects</h2>
      <div className="mb-6">
        <h3 className="font-semibold">CT-based Stroke Segmentation and Classification</h3>
        <p>PyTorch, UNet, OpenCV, Medical Imaging</p>
        <ul className="list-disc pl-5">
          <li>Designed and trained a UNet-based segmentation model to distinguish between ischemic and hemorrhagic strokes.</li>
          <li>Applied image preprocessing and extended with classification head for end-to-end diagnosis.</li>
          <li>Visualized segmentation masks as overlays on CT images.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Cattle Behavior Detection System</h3>
        <p>YOLOv11, OpenCV, 3D-CNN, Multi-Object Tracking</p>
        <ul className="list-disc pl-5">
          <li>Built a complete behavior analysis pipeline with YOLOv11 for detection, tracking algorithms, and 3D-CNN for temporal modeling.</li>
          <li>Labeled custom cattle video dataset and designed temporal evaluation metrics.</li>
          <li>Optimized inference speed for deployment on edge devices.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">School Course Scheduler</h3>
        <p>React, Tailwind CSS <a href="https://scheduler.efeatas.dev" className="link" target="_blank">scheduler.efeatas.dev</a></p>
        <ul className="list-disc pl-5">
          <li>Designed responsive course scheduling web app with React and Tailwind CSS.</li>
          <li>Implemented real-time drag-and-drop scheduling and conflict resolution.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Image Processing and 2D DCT Implementation</h3>
        <p>Python, OpenCV</p>
        <ul className="list-disc pl-5">
          <li>Implemented basic image manipulation functions using OpenCV.</li>
          <li>Coded 2D Discrete Cosine Transform algorithm from scratch.</li>
        </ul>
      </div>
    </section>
  );
}

