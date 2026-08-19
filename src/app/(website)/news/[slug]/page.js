import { notFound } from "next/navigation";
import { NEWS_ARTICLES } from "@/constants/newsData";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) return { title: "Article Not Found | Sharda Academy" };

  return {
    title: `${article.title} | Sharda Academy News`,
    description: article.shortDescription,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: article.category, href: "/news" },
    { label: "Article", href: "#" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.imageUrl],
    "datePublished": article.publishDate,
    "author": [{
        "@type": "Person",
        "name": article.author,
    }]
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      <div className="container mx-auto px-4 pt-28 pb-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6 leading-tight">{article.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
          <span className="font-semibold text-primary">{article.category}</span>
          <span>•</span>
          <span>{article.publishDate}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
          <span>•</span>
          <span>By {article.author}</span>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 bg-muted">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none text-paragraph">
          {/* Placeholder for actual rich text content */}
          <p className="text-xl leading-relaxed mb-6 font-medium text-heading">
            {article.shortDescription}
          </p>
          <p>
            {article.content} 
            (This is a placeholder for the actual full article content that would be fetched from a CMS).
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="bg-muted px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
