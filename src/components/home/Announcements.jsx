"use client";

import { ANNOUNCEMENTS_DATA } from "@/constants/homeData";
import { NewsCard } from "@/components/news/NewsCard";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function Announcements() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal className="w-full text-center" width="100%">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4">Announcements</h2>
          </Reveal>
          <Fade direction="up" delay={0.1}>
            <p className="text-base md:text-lg text-paragraph">Stay informed with the latest happenings at Sharda Academy.</p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {ANNOUNCEMENTS_DATA.map((news, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full w-full">
              <NewsCard 
                title={news.title}
                shortDescription={news.shortDescription}
                category={news.category}
                publishDate={news.publishDate}
                readingTime={news.readingTime}
                imageUrl={news.imageUrl}
                featured={false}
              />
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
