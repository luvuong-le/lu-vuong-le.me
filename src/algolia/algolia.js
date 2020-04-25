// Get Pages
const pageQuery = `{
    pages: allSitePage(
        filter: {
            path: { regex: "/" },
        }
    ) {
        edges {
            node {
                objectID: id
                path
            }
        }
    }
}`

// Get Blog Posts
const postQuery = `{
    posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" }}
    ) {
        edges {
            node {
                objectID: id
                frontmatter {
                    title
                    date(formatString: "MMM D, YYYY")
                    tags
                    description
                    thumbnail
                }
                fields {
                    slug
                    readingTime {
                        text
                    }
                }
                excerpt(pruneLength: 5000)
            }
        }
    }
}`

// Transform data
const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        ...rest,
    }))

const settings = {
    attributesToSnippet: [`excerpt: 20`],
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages.edges.map(({ node }) => node),
        indexName: `Pages`,
    },
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: `Posts`,
        settings,
    },
]

module.exports = queries
