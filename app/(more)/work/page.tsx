import type { Metadata } from "next";

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
        <p>Bachelor of Science in Computer Engineering, Minor in Business Management</p>
        <p>GPA: 3.45 | Ankara, Turkey | Aug. 2022 – May 2026</p>
      </div>

      <h2 className="text-xl font-bold pb-4">Experience</h2>
      <div className="mb-6">
        <h3 className="font-semibold">Big Data & AI Intern, HAVELSAN AS</h3>
        <p>Ankara | Jul 2025 – Sep 2025</p>
        <ul className="list-disc pl-5">
          <li>Spearheaded an end-to-end audio classification system, combining deep learning, audio signal processing, and full-stack deployment.</li>
          <li>Engineered a fully custom audio dataset collection pipeline using the YouTube API and YAMNet, enabling scalable and automated scraping of domain-specific sounds with class-aware filtering.</li>
          <li>Gained hands-on expertise with feature extraction techniques such as MFCC and Mel Spectrogram, applying signal preprocessing to boost model performance and robustness.</li>
          <li>Conducted feature space separability analysis using PCA, t-SNE, and embedding matrix visualizations to assess class clustering and guide model refinement.</li>
          <li>Applied transfer learning by freezing upper layers of the YAMNet model and fine-tuning lower layers on task-specific audio datasets for efficient domain adaptation.</li>
          <li>Researched and operationalized methods from leading survey papers, transforming theoretical models into practical implementations for real-world use cases.</li>
          <li>Trained and optimized various deep learning models, including VGG16, ResNet, and custom CNN architectures, executing extensive hyperparameter tuning and ablation studies across resource tiers.</li>
          <li>Performed comprehensive metric-driven evaluations and trade-off analyses (accuracy, latency, model size), maintaining detailed documentation and technical reporting to support future reproducibility.</li>
          <li>Designed and deployed a modern, responsive UI with React.js and Ant Design, enabling users to upload raw audio files and view live prediction results.</li>
          <li>Developed a FastAPI-based backend with scalable REST endpoints, delivering real-time audio inference and model serving over the web.</li>
          <li>Integrated all components into a seamless end-to-end pipeline, allowing non-technical users to interact with state-of-the-art models effortlessly through the browser.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">TUBITAK 2247-C Undergraduate Research Assistant, Wellztech Bilisim ve Ileri Teknolojiler AS</h3>
        <p>ODTU TEKNOKENT, Ankara | Sep 2024 – May 2025</p>
        <ul className="list-disc pl-5">
          <li>Developed a responsive web application using React.js to enable real-time monitoring of livestock behavior, integrating a custom DICOM Viewer for analyzing medical imaging data related to animal health.</li>
          <li>Implemented a YOLOv11-based object detection system using Python and OpenCV to identify and classify cattle behaviors such as ruminating, eating, standing, and lying down.</li>
          <li>Prepared and annotated a high-quality video frame dataset to train and validate the YOLO model for robust behavior classification.</li>
          <li>Designed a custom image preprocessing and augmentation pipeline to improve model generalization and accuracy across diverse environments.</li>
          <li>Integrated a 3D Convolutional Neural Network (3D-CNN) to extract temporal features from video sequences, enhancing the spatial-only YOLO-based classification.</li>
          <li>Explored, compared, and fine-tuned multiple multi-object tracking algorithms including ByteTrack, BoT-SORT, and DeepSORT for accurate cattle movement tracking across frames.</li>
          <li>Collaborated on LLM fine-tuning pipelines to adapt large language models to domain-specific tasks, focusing on data preparation, prompt engineering, and model evaluation strategies.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Flutter Developer Intern, Limak Teknoloji Yazılım Savunma Sanayi ve Ticaret AS</h3>
        <p>Bilkent CYBERPARK, Ankara | Jun 2024 – Aug 2024</p>
        <ul className="list-disc pl-5">
          <li>Designed and developed responsive, cross-platform mobile UIs using Flutter and Dart, emphasizing performance, usability, and clean architecture.</li>
          <li>Built modular components and applied advanced state management techniques (e.g., Provider, Riverpod) to ensure scalable and maintainable codebases.</li>
          <li>Completed a comprehensive Flutter development curriculum, gaining strong theoretical and practical command of widget lifecycle, app routing, and platform integration.</li>
          <li>Integrated RESTful APIs for real-time data handling and optimized performance for both iOS and Android platforms.</li>
          <li>Implemented and tested app functionalities using unit, widget, and integration tests, delivering reliable builds with detailed testing reports and QA documentation.</li>
          <li>Conceptualized and developed a face recognition application that suggests personalized hairstyles using OpenAI API and facial image analysis.</li>
          <li>Applied image processing techniques to extract facial landmarks and integrate AI-powered recommendation systems for dynamic UI personalization.</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold pb-4">Projects</h2>
      <div className="mb-6">
        <h3 className="font-semibold">CT-based Stroke Segmentation and Classification</h3>
        <p>PyTorch, UNet, OpenCV, Medical Imaging</p>
        <ul className="list-disc pl-5">
          <li>Designed and trained a UNet-based segmentation model to distinguish between ischemic and hemorrhagic strokes from CT scan images.</li>
          <li>Applied image preprocessing techniques including windowing, contrast normalization, and data augmentation to enhance generalization.</li>
          <li>Extended the segmentation model with a classification head, enabling complete end-to-end clinical diagnosis support.</li>
          <li>Visualized segmentation masks as overlays on CT images to improve interpretability for medical professionals.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Cattle Behavior Detection System</h3>
        <p>YOLOv11, OpenCV, 3D-CNN, Multi-Object Tracking</p>
        <ul className="list-disc pl-5">
          <li>Built a complete behavior analysis pipeline combining YOLOv11 for object detection, ByteTrack / BoT-SORT for tracking, and 3D-CNN for temporal modeling.</li>
          <li>Labeled a custom cattle video dataset with activity annotations (e.g., ruminating, lying, standing) to support supervised training.</li>
          <li>Designed a novel per-object temporal evaluation metric to analyze behavioral consistency over time.</li>
          <li>Optimized inference speed and model efficiency for deployment on edge devices in farm environments.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">School Course Scheduler</h3>
        <p>React, Tailwind CSS <a href="https://scheduler.efeatas.dev" className="link" target="_blank">scheduler.efeatas.dev</a></p>
        <ul className="list-disc pl-5">
          <li>Designed and implemented a responsive course scheduling web app to help educational institutions manage class timetables.</li>
          <li>Used React and Tailwind CSS to build a modern, mobile-friendly interface with a focus on UX and accessibility.</li>
          <li>Implemented real-time interaction features for seamless drag-and-drop scheduling and visual conflict resolution.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Image Processing and 2D DCT Implementation</h3>
        <p>Python, OpenCV</p>
        <ul className="list-disc pl-5">
          <li>Implemented basic image manipulation functions (addition, scaling, filtering) using OpenCV.</li>
          <li>Coded a mathematical implementation of the 2D Discrete Cosine Transform (DCT) algorithm from scratch, without using external DCT libraries.</li>
          <li>Strengthened theoretical understanding of frequency domain transformations and their role in image compression.</li>
        </ul>
      </div>
    </section>
  );
}

