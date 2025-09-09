import React from "react";


interface FlutterIconProps {
  width?: string | number;
  height?: string | number;
}

const FlutterIcon: React.FC<FlutterIconProps> = ({ width = 24, height = 24 }) => (
  <img
    src="https://devicon-website.vercel.app/api/flutter/original.svg"
    alt="Flutter Icon"
    width={width}
    height={height}
  />
);

export default FlutterIcon;
