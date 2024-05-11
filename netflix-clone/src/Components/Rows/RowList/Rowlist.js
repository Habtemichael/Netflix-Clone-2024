import React from 'react'
import Row from "../../Rows/Row/Row"
import requests from "../../../Utils/requests"

const Rowlist = () => {
  return (
    <>
    <Row title="Netflix Originals"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}/>
    <Row title="Trending Now"fetchUrl={requests.fetchTrending}/> 
    <Row title="Top Rated Movies"fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Tv Show"fetchUrl={requests.fetchTvShow}/>
    <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>

    </>
  )
}

export default Rowlist;

