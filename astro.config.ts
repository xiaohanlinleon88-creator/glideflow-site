import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site";

export default defineConfig({
  site: `https://${siteConfig.domain}`,
  integrations: [
    starlight({
      title: `${siteConfig.brandName} Docs`,
      description: siteConfig.description,
      favicon: "/favicon.svg",
      customCss: ["./src/styles/docs.css"],
      sidebar: [
        {
          label: "Documentation",
          items: [{ autogenerate: { directory: "docs" } }]
        }
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
