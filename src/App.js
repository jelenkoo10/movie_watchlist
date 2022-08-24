import React from "react"
import Movie from "./components/Movie"
import NoMovies from "./components/NoMovies"
import Watchlist from "./components/Watchlist"

export default function App() {
    const [userInput, setUserInput] = React.useState("")
    const [movieObject, setMovieObject] = React.useState({})
    const [isClicked, setIsClicked] = React.useState(false)
    const [display, setDisplay] = React.useState("movies")

    React.useEffect(function() {
        if (display == "movies") {
            fetch(`https://www.omdbapi.com/?apikey=1c691491&t=${userInput}`)
            .then(res => res.json())
            .then(data => setMovieObject(data))
        }
    }, [userInput])

    function changeDisplay() {
        if (display == "movies") {
            setDisplay("watchlist")
        } else {
            setDisplay("movies")
        }
    }

    function changeInput() {
        setUserInput(document.getElementById("input").value)
    }

    return (
        <main>
            <header className="header">
                <h1>
                    {display == "movies" ? "Find your film" : "My watchlist"}
                </h1>
                <h3 onClick={changeDisplay}>
                    {display == "movies" ? "My watchlist" : "Search for movies"}
                </h3>
            </header>
            <div className="form">
                <input type="search" id="input" placeholder="Search..." autoComplete="off" onChange={changeInput} onSearch={() => setIsClicked(false)} /> 
                <button type="submit" onClick={() => setIsClicked(true)}>Search</button>
            </div> 
            {display == "watchlist" ? <Watchlist /> :
            isClicked == false ? 
            <NoMovies search={'not yet'} /> : 
                movieObject.Response == 'False' ? 
                <NoMovies search={'not found'} /> : 
                <Movie obj={movieObject} page="movie" />} 
        </main> 
    )
}
