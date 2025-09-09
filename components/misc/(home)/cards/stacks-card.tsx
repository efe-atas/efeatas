import React from "react";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import TailwindcssOriginalIcon from "react-devicons/tailwindcss/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import ReactOriginalIcon from "react-devicons/react/original";
import PythonOriginalIcon from "react-devicons/python/original";
import CppOriginalIcon from "react-devicons/cplusplus/original";
import JavaOriginalIcon from "react-devicons/java/original";
import DockerOriginalIcon from "react-devicons/docker/original";
import GodotOriginalIcon from "react-devicons/godot/original";
import ArchlinuxOriginalIcon from "react-devicons/archlinux/original";
import ElixirOriginalIcon from "react-devicons/elixir/original";
import CloudflareOriginalIcon from "react-devicons/cloudflare/original";
import FigmaOriginalIcon from "react-devicons/figma/original";
import FirebaseOriginalIcon from "react-devicons/firebase/original";
import GitOriginalIcon from "react-devicons/git/original";
import MysqlOriginalIcon from "react-devicons/mysql/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import PostgresOriginalIcon from "react-devicons/postgresql/original";
import PrismaOriginalIcon from "react-devicons/prisma/original";
import ViteOriginalIcon from "react-devicons/vite/original";
import FlutterOriginalIcon from "react-devicons/flutter/original";
import LinuxOriginal from "react-devicons/linux/original";
import KaggleOriginalWordmark from "react-devicons/kaggle/original-wordmark";
import FastapiOriginal from "react-devicons/fastapi/original";
import GithubOriginal from "react-devicons/github/original";
import JupyterOriginalWordmark from "react-devicons/jupyter/original-wordmark";
import MongodbOriginal from "react-devicons/mongodb/original";
import MysqlOriginalWordmark from "react-devicons/mysql/original-wordmark";
import RaspberrypiOriginal from "react-devicons/raspberrypi/original";
import TensorflowOriginal from "react-devicons/tensorflow/original";
import UbuntuPlain from "react-devicons/ubuntu/plain";
import VscodeOriginal from "react-devicons/vscode/original";
import XcodeOriginal from "react-devicons/xcode/original";
import PytorchOriginal from "react-devicons/pytorch/original";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
};

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start);

const Marquee = (props: MarqueeProps) => {
  const {
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
  } = props;

  const ifToRightOrToBottom = (direction: string) => {
    if (direction === "left") {
      return "to right";
    } else {
      return "to bottom";
    }
  };

  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className,
      )}
      data-testid="marquee"
      style={{
        maskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      {range(0, 2).map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-4 [--gap:1rem]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse",
          )}
          data-testid={`marquee-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export const StacksCard = () => {
  return (
    <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
      {/* <p className="text-sm font-mono flex justify-center  text-zinc-600 dark:text-zinc-488">
        fun things
      </p> */}
      <Marquee className="" fade pauseOnHover>
        <KaggleOriginalWordmark size="48" />
        <LinuxOriginal size="48" />
        <JupyterOriginalWordmark size="48" />
        <NextjsOriginalIcon size="48" />
        <ReactOriginalIcon size="48" />
        <GithubOriginal size = "48" />
        <VscodeOriginal size="48" />
        <TensorflowOriginal size="48" />
        <JavaOriginalIcon size="48" />
        <MongodbOriginal size = "48" />
        <UbuntuPlain size = "48" />

      </Marquee>
      <Marquee className="mt-2" reverse fade pauseOnHover>
        <XcodeOriginal size="48" />
        <FastapiOriginal size="48" />
        <DockerOriginalIcon size="48" />
        <PythonOriginalIcon size= "48"/>
        <FlutterOriginalIcon size="48" />
        <RaspberrypiOriginal size="48" />
        <FirebaseOriginalIcon size="48" />
        <GitOriginalIcon size="48" />
        <CloudflareOriginalIcon size="48" />
        <MysqlOriginalIcon size="48" />
      </Marquee>
    </div>
  );
};
