import type { Metadata } from "next";
import { quotesData } from "./books";

export const metadata: Metadata = {
  title: "efeatas // quotes",
  description:
    "A collection of meaningful quotes and words of wisdom that resonate with me.",
};

const quotesPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Quotes</h1>
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          Zaman içinde aklımda kalan, bana bir şeyler hissettiren ya da
          düşündüren sözler. Hayatın farklı dönemlerinde farklı anlamlar
          kazanan kelimeler.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {quotesData.map((item, index) => (
          <article
            key={index}
            className="group relative"
          >
            {/* Subtle left accent on hover */}
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <blockquote className="space-y-6">
              {/* Quote text */}
              <p className="text-[17px] leading-[1.9] text-zinc-700 dark:text-zinc-300 italic">
                <span className="text-zinc-400 dark:text-zinc-600 not-italic font-serif text-2xl mr-1">"</span>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-400 dark:hover:decoration-zinc-600"
                  >
                    {item.quote}
                  </a>
                ) : (
                  item.quote
                )}
                <span className="text-zinc-400 dark:text-zinc-600 not-italic font-serif text-2xl ml-1">"</span>
              </p>
              
              {/* Author info */}
              {(item.author || item.source) && (
                <footer className="flex items-baseline gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                  {item.author && (
                    <cite className="not-italic font-medium">
                      — {item.author}
                    </cite>
                  )}
                  {item.source && (
                    <span className="text-zinc-400 dark:text-zinc-600">
                      {item.source}
                    </span>
                  )}
                </footer>
              )}
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};

export default quotesPage;
