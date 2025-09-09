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
  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content: string) {
  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)![0]) || [];
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}

export async function getAllPosts() {
  const localPosts = getBlogPosts();
  const rssPosts = await getRSSPosts();
  return [...localPosts, ...rssPosts];
}

async function getRSSPosts() {
  try {
    const Parser = (await import('rss-parser')).default;
    const parser = new Parser();
    const feed = await parser.parseURL('https://efe-atas.github.io/feed.xml');
    return feed.items.map((item) => ({
      metadata: {
        title: item.title || '',
        publishedAt: item.pubDate || '',
        summary: item.summary || item.contentSnippet || '',
        externalLink: item.link,
        isExternal: true,
      },
      slug: item.link?.split('/').pop() || '',
      tweetIds: [],
      content: item.content || '',
    }));
  } catch (error) {
    console.error('Error fetching RSS posts:', error);
    return [];
  }
}
