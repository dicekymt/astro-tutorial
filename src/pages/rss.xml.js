import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro Learner | Blog",
    description: "My jorney learning Astro",
    site: "https://fabulous-cobbler-a988d6.netlify.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
