module.exports = {
    siteMetadata: {
        title: `Lu-Vuong Le`,
        description: `Welcome to my portfolio! I am a software engineer, mentor and designer`,
        author: `@luvuong-le`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
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
                // icon: ``, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    "@styles": `src/styles`,
                    "@components": `src/components`,
                    "@assets": `src/assets`,
                    "@sections": `src/sections`,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
