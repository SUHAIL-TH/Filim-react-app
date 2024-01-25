import React, { useEffect } from "react";


const App=()=>{
    const API_URL='http://www.omdbapi.com?apikey=7041238e'
    const serachmovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json()
        console.log(data.Search)
    }
    useEffect(()=>{
        serachmovies('spiderman')
    },[])
    return(
        <h1>Hello jumana suhail </h1>
    )
}

export default App;