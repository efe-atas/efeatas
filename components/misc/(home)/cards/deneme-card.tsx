"use client";

import React from "react";

export const YearProgressCard = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);
  const total = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  const percent = Math.floor((elapsed / total) * 100);

  return (
    <div className="h-36 w-full bg-black rounded-lg shadow-sm border border-gray-800 flex flex-col justify-center items-center p-6 hover:shadow-md transition-shadow duration-300">
      <div className="text-center mb-4">
        <div className="text-3xl font-light text-white mb-1">{percent}%</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider">year completed</div>
      </div>

      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-1000 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        {now.getFullYear()}
      </div>
    </div>
  );
};