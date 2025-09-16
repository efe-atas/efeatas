import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\\-\\-+/g, "-"); // Replace multiple - with single -
}

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 id={slugify(children as string)}>
      <a href={`#${slugify(children as string)}`} className="anchor" />
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 id={slugify(children as string)}>
      <a href={`#${slugify(children as string)}`} className="anchor" />
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 id={slugify(children as string)}>
      <a href={`#${slugify(children as string)}`} className="anchor" />
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 id={slugify(children as string)}>
      <a href={`#${slugify(children as string)}`} className="anchor" />
      {children}
    </h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 id={slugify(children as string)}>
      <a href={`#${slugify(children as string)}`} className="anchor" />
      {children}
    </h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 id={slugify(children as string)}>
      <a href={`#${slugify(children as string)}`} className="anchor" />
      {children}
    </h6>
  ),
  img: ({ src, alt, className, style, ...props }: { 
    src?: string; 
    alt?: string; 
    className?: string; 
    style?: React.CSSProperties;
    [key: string]: any;
  }) => {
    if (!src) return null;
    // For Next.js Image component, src must be absolute or start with /
    const imageSrc = src.startsWith('http') ? src : (src.startsWith('/') ? src : `/${src}`);
    
    // Extract width and height from style or props if available
    const width = props.width || (style?.maxWidth ? parseInt(style.maxWidth.toString()) : 800);
    const height = props.height || 600;
    
    return (
      <div style={style} className={className}>
        <Image 
          src={imageSrc} 
          alt={alt || ""} 
          width={width} 
          height={height} 
          style={{ maxWidth: '100%', height: 'auto' }}
          {...props}
        />
      </div>
    );
  },
  div: ({ children, style, className, ...props }: { 
    children: React.ReactNode; 
    style?: React.CSSProperties; 
    className?: string;
    [key: string]: any;
  }) => (
    <div style={style} className={className} {...props}>
      {children}
    </div>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
    if (!href) return <a>{children}</a>;
    if (href.startsWith("/")) {
      return <Link href={href}>{children}</Link>;
    }
    if (href.startsWith("#")) {
      return <a href={href} aria-label={href}>{children}</a>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={href}>
        {children}
      </a>
    );
  },
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (match) {
      // Code block
      try {
        const codeHTML = highlight(children as string);
        return <code dangerouslySetInnerHTML={{ __html: codeHTML }} className={className} />;
      } catch (error) {
        console.error('Code highlighting error:', error);
        return <code className={className}>{children}</code>;
      }
    } else {
      // Inline code
      return <code>{children}</code>;
    }
  },
  table: ({ children }: { children: React.ReactNode }) => (
    <table className="table-auto">{children}</table>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead>{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody>{children}</tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border px-4 py-2">{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border px-4 py-2">{children}</td>
  ),
};

interface MDXProps {
  source: string;
  components?: any;
}

export const CustomMDX = (props: MDXProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{ ...components, ...(props.components || {}) }}
    >
      {props.source}
    </ReactMarkdown>
  );
};
