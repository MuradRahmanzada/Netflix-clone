import React, { useState, useEffect, useRef } from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/Featured/Featured";
import requests from "../../requests";
import Row from "../../Components/Row/Row";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="" />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default Home;
