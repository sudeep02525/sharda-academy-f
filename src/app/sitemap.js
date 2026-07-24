import { COURSES_LIST } from "@/constants/coursesData";
import { NEWS_ARTICLES } from "@/constants/newsData";

export default function sitemap() {
  const baseUrl = "https://shardaacademyofficial.in";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/faculty",
    "/gallery",
    "/results",
    "/news",
    "/events",
    "/contact",
    "/admission"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Courses Routes
  const coursesRoutes = COURSES_LIST.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic News Routes
  const newsRoutes = NEWS_ARTICLES.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...coursesRoutes, ...newsRoutes];
}
