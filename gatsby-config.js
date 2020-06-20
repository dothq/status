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
        name: require("./config.json").brand.name,
        short_name: require("./config.json").brand.name,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
