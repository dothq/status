const fs = require("fs")

if(!fs.existsSync('./config.json')) {
  fs.writeFileSync("./config.json", JSON.stringify({
    brand: {
      name: "Status", 
      description: "Default Status Page",
      author: "",
      icon: ""
    }
  }))
}

module.exports = {
  siteMetadata: {
    title: require("./config.json").brand.name,
    description: require("./config.json").brand.description,
    author: require("./config.json").brand.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
