import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
    InstantSearch,
    connectHits,
    connectSearchBox,
    Highlight,
} from "react-instantsearch-dom"
import styled from "@emotion/styled"

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const SearchLabel = styled.label`
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1rem 0 0 0;
`

const SearchInput = styled.input`
    width: fit-content;
    padding: 1rem;
    font-family: "SF UI Text Regular", sans-serif;
    margin: 1rem 0 0 0;
    border: 2px solid #13315c;
`

const HitItem = styled.div`
    background: white;
    padding: 1rem;
    font-size: 1.3rem;
    z-index: 3;
    animation: fade 1s ease;

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const HitTitle = styled.span`
    display: block;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1rem 0;
    color: #000000;
`

const HitDescription = styled.span`
    display: block;
    font-size: 1.3rem;
    color: #000000;
`

const HitError = styled.span`
    display: block;
    margin: 1rem 0;
    font-size: 1.6rem;
    font-weight: bold;
    color: #000000;
`

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => {
    return (
        <SearchContainer>
            <SearchLabel htmlFor="search">Search Posts</SearchLabel>
            <SearchInput
                type="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
                id="search"
                name="search"
                placeholder="Search..."
                autoComplete="off"
            />
        </SearchContainer>
    )
})

const Hits = connectHits(({ hits }) => (
    <div>
        {hits.length ? (
            hits.map(hit => {
                return (
                    <HitItem key={hit.objectID}>
                        <Link to={hit.fields.slug}>
                            <HitTitle>
                                <Highlight
                                    attribute="title"
                                    hit={hit}
                                    tagName="mark"
                                />
                            </HitTitle>
                            <HitDescription>
                                <Highlight
                                    attribute="description"
                                    hit={hit}
                                    tagName="mark"
                                />
                            </HitDescription>
                        </Link>
                    </HitItem>
                )
            })
        ) : (
            <HitError>
                There were no results for your query. Please try again
            </HitError>
        )}
    </div>
))

const Results = connectSearchBox(({ currentRefinement, refine }) =>
    currentRefinement ? <Hits /> : null
)

function AlgoliaSearch({ indexName }) {
    return (
        <InstantSearch indexName={indexName} searchClient={searchClient}>
            <SearchBox />
            <Results />
        </InstantSearch>
    )
}

export default AlgoliaSearch
