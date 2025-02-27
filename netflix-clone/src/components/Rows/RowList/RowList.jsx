// import React from 'react'
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="Trending movies"
        fetch={requests.fetchTrending}
        isLarge={true}
      />
      <Row
        title="NetflixOriginals movies"
        fetch={requests.fetchNetflixOriginals}
        isLarge={false}
      />
      <Row
        title="TopRated movies"
        fetch={requests.fetchTopRatedMovies}
        isLarge={true}
      />
      <Row
        title="Action movies"
        fetch={requests.fetchActionMovies}
        isLarge={true}
      />
      <Row
        title="Comedy movies"
        fetch={requests.fetchComedyMovies}
        isLarge={true}
      />
      <Row
        title="Horror movies"
        fetch={requests.fetchHorrorMovies}
        isLarge={true}
      />
      <Row
        title="Romance movies"
        fetch={requests.fetchRomanceMovies}
        isLarge={true}
      />
      <Row
        title="Documentaries movies"
        fetch={requests.fetchDocumentaries}
        isLarge={true}
      />
    </>
  );
};

export default RowList;
