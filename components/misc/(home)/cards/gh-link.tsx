import { Github } from "lucide-react";

export const GHLink = () => {
  return (
    <a
      className="w-full h-36 bg-black rounded-lg shadow-sm border border-gray-800 flex flex-col justify-center p-6 hover:shadow-md transition-shadow duration-300"
      href="http://github.com/efe-atas"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center mb-3">
        <Github className="w-5 h-5 text-white mr-2" />
        <span className="text-xs text-gray-400 uppercase tracking-wider">GitHub</span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-light text-white leading-tight mb-1">
          My Experiments
        </h3>
        <p className="text-xs text-gray-500">
          Code & Projects
        </p>
      </div>
    </a>
  );
};
