export default function sitemap() {
  const baseUrl = "https://shardaacademy.edu";

  // Static routes
  const routes = [
    "",
    "/about",
    "/courses",
    "/courses/jee",
    "/courses/neet",
    "/courses/foundation",
    "/courses/mht-cet",
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

  return [...routes];
}
