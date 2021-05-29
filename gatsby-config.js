module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `Thiago Skibinski`,
    description: `I'm a front-end engineer`,
    author: `Thiago Skibinski`,
    siteUrl: "https://thiagoskbnsk.github.io/site/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Thiago Skibinski",
        short_name: "Thiago Skibinski",
        start_url: "/website/",
        background_color: "#070a57",
        theme_color: "#070a57",
        display: "standalone",
        icon: "src/assets/images/gatsby-icon.png",
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153084073-1",
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["Cache-control: public,max-age=31557600,immutable"],
        },
      },
    },
  ],
};
