import React from 'react'

// Property checking feature 2:
// It's always a good idea to supply there values in case they're not provided to whatever reason. 
// This will allow your UI to still render as expected

export const Book = ({title = "No Title Provided", author = "No Author", pages = 0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}</p>
        </section>
    )
}