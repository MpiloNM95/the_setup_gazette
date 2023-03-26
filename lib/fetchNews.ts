import { gql } from "graphql-request"

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $category: String
        $keywords: String
    )   {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "us"
            sort: "published_desc"
            keywords: $keywords
        ) {
            data {
                author
                categroy
                image
                description
                country
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
        }
    }
    `;

    // Fetch Function with Next.js 13 caching...
    const res = await fetch('https://szeghalom.stepzen.net/api/washing-bear/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20},
        headers : {
            "Content-Type": "application/json",
            Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query: query,
            variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords,
            },
        }),
      }
    );

    console.log(
        "LOADING NEW DATA FROM API for category >>>",
        category,
        keywords
    );

    const NewsResponse = await res.json();
    // Sort Function by images vs not images present

    // return the results
};

export default fetchNews;

