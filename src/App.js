import React, { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
// const movie1={
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }
const App=()=>{
    const API_URL='http://www.omdbapi.com?apikey=7041238e'
    const [searchvalue,setSearchvalue]=useState("")
    const [movies,setMovies]=useState([])
    const serachmovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json()
        console.log(data.Search)
         setMovies(data.Search)
    }
    useEffect(()=>{
        serachmovies('avengers')
    },[])
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
            <input placeholder="Search for movie" value={searchvalue} onChange={(val)=>{
                console.log()
                setSearchvalue(val.target.value)
            }}/>
            <img src={SearchIcon} alt="serach icon"  onClick={()=>{
                serachmovies(searchvalue)
            }} />
            </div>
            {
                movies?.length > 0?(
            <div className="container">
                {
                    movies.map((data,index)=>(
                        <MovieCard key={index}  movie1={data}/>
                    ))
                }  
            </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            

        </div>
    )
}

export default App;