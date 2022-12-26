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
                    "63a9e183ef27713dc89a0860",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-utz92dgu",
                  apiId: "4894f3e6-d383-4132-94b2-6a23570c1357",
                },
                {
                  buildHookId: "63a9e18368ae894a1aa36574",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-721cq1io",
                  apiId: "6d1cc1f7-5b79-43a4-b2f4-d6fec5c12755",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ShaneDeconinck/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-721cq1io.netlify.app",
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
