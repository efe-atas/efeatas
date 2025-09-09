import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL('https://efe-atas.github.io/feed.xml');

    const posts = feed.items.map((item) => ({
      title: item.title,
      publishedAt: item.pubDate,
      summary: item.summary || item.contentSnippet || '',
      externalLink: item.link,
      slug: item.link?.split('/').pop() || '',
      content: item.content || '',
      isExternal: true,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json({ error: 'Failed to fetch RSS feed' }, { status: 500 });
  }
}
