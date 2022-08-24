import React from "react"
import Movie from "./Movie"

export default function MoviesList(props) {
    const movies = props.arr.results.map((movie) => <Movie obj={movie} />)

    return (
        {movies}
    )
}