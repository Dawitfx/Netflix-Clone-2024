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
    </>
  );
};

export default RowList;
