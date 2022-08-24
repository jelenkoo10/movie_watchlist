import React from "react"
import Movie from "./Movie"

export default function Watchlist() {
    function allStorage() {
        let values = []
        let keys = Object.keys(localStorage)
        let i = keys.length
        while ( i--) {
            if (localStorage.key(i).charAt(0) === localStorage.key(i).charAt(0).toUpperCase()) {
                values.push( JSON.parse(localStorage.getItem(keys[i])) )
            } 
        }
        return values
    }

    const moviesOnWatchlist = allStorage()
    console.log(moviesOnWatchlist)

    return (
        moviesOnWatchlist.map(function(movie) {
            return <Movie obj={movie} />
        })
    )
}