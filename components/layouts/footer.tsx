import { Emoji } from "@/components/misc/emoji";
import { clsx } from "clsx";
import type { ComponentProps } from "react";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
  const year = String(new Date().getFullYear());

  return (
    <footer
      className={clsx(
  "flex flex-col font-normal text-xs text-zinc-400 dark:text-zinc-500 md:pt-0 pt-2",
        className,
      )}
      {...props}
    >
      <hr className="w-full border-t border-zinc-150 dark:border-zinc-800" />
      <div className="flex items-center pt-2">
        <span>
          <time className="hidden sm:inline" dateTime={String(year)}>
            {year}{" "}
          </time>
        </span>
        <a
          className="link ml-auto inline-flex items-center gap-1.5"
          href="https://github.com/vimfn/www"
          rel="noreferrer"
          target="_blank"
        >
          <span>forked from vimfn.in</span>
        </a>
      </div>
    </footer>
  );
};
