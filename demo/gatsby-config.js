module.exports = {
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-mdx-embed",
      options: {
        test: "atzalnogniezijnzekertest",
        defaultProps: { CodePen: { height: 123 }, Tweet: { theme: "dark" } },
      },
    },
    "gatsby-theme-docz",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-5",
      },
    },
  ],
}
