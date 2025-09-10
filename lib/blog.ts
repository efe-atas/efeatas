import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  externalLink?: string;
  draft?: boolean;
  isExternal?: boolean;
};

function processLiquidIncludes(content: string): string {
  // Replace Liquid include statements with HTML img tags
  const liquidIncludeRegex = /\{\%\s*include\s+figure\.liquid\s+path="([^"]+)"\s+title="([^"]+)"\s+class="([^"]+)"\s*\%\}/g;
  return content.replace(liquidIncludeRegex, (match, path, title, className) => {
    // Convert relative paths to absolute paths for Next.js
    const absolutePath = path.startsWith('/') ? path : `/${path}`;
    return `<img src="${absolutePath}" alt="${title}" class="${className}" />`;
  });
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    // @ts-ignore
    metadata[key.trim() as keyof Metadata] = value;
  });

  // console.log(metadata)
  return { metadata: metadata as Metadata, content: processLiquidIncludes(content) };
}

function getMDFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function readMDFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDData(dir: string) {
  const mdFiles = getMDFiles(dir);
  return mdFiles.map((file) => {
    const { metadata, content } = readMDFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      tweetIds: [],
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDData(path.join(process.cwd(), "content"));
}

export function getAllPosts() {
  return getBlogPosts();
}


