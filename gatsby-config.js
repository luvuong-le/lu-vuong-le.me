module.exports = {
    siteMetadata: {
        title: `Lu-Vuong Le`,
        description: `Welcome to my portfolio! I am a software engineer, mentor and designer`,
        author: `@luvuong-le`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                src: "https://kit.fontawesome.com/116ecaa9e7.js",
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
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GA_TRACKING_ID,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: [""],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "auto",
            },
        },
        {
            resolve: "gatsby-plugin-guess-js",
            options: {
                // Find the view id in the GA admin in a section labeled "views"
                GAViewID: process.env.GA_VIEW_ID,
                // Add a JWT to get data from GA
                jwt: {
                    client_email: process.env.GUESS_JWT_EMAIL,
                    private_key: Buffer.from(
                        process.env.GUESS_JWT_PRIVATE_KEY,
                        "base64"
                    ).toString("ascii"),
                },
                minimumThreshold: 0.03,
                // The "period" for fetching analytic data.
                period: {
                    startDate: new Date("2018-1-1"),
                    endDate: new Date(),
                },
            },
        },
    ],
}
