const path = require("path")

const directoryPath = path.join(
  process.cwd(),
  "../@pauliescanlon/gatsby-mdx-embed/src/components"
)

export default {
  title: "gatsby-mdx-embed",
  description:
    "gatsby-mdx-embed is an mdx plugin to embed YouTube, Twitter etc into .mdx without imports",
  menu: ["Getting Started", { name: "Components" }],
  docgenConfig: {
    searchPath: directoryPath,
  },
  themeConfig: {
    initialColorMode: "light",
  },
}