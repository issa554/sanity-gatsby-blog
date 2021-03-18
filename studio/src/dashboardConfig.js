export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60535f74d4985927bc869170",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dhsnp7fg",
                  apiId: "41883446-59ce-4c52-bb27-ddc94645a058",
                },
                {
                  buildHookId: "60535f75435a7d2eedd1e934",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-eqk4asis",
                  apiId: "dba7fd66-6083-4a1c-8320-5cc57ee6ef96",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/issa554/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-eqk4asis.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
