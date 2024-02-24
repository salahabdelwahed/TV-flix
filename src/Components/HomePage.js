import React, { useState } from "react";
import CardFilm from "./CardFilm.js";
import dataUpComing from "../DB/dataUpcomingFilm.js";
import dataThisWeek from "../DB/dataThisweek.js";
import dataTopTreending from "../DB/dataTopTreending.js";
import { Button, Carousel } from "react-bootstrap";
import "../CSS/homePage.css";
import "../CSS/Carous.css";

function HomePage({ valueTitle,setGetDataFrom }) {
  const [dataMovieState, setdataMovieState] = useState(dataUpComing);
  setGetDataFrom(dataMovieState);
  return (
    <div className="overaly">
      <div className="overaly-block1">
        <ul>
          <li>
            <h1>Genre</h1>
          </li>
          <li>
            <a href="test">Action</a>
          </li>
          <li>
            <a href="test">Adventure</a>
          </li>
          <li>
            <a href="test">fantasy</a>
          </li>
          <li>
            <a href="test">Horror</a>
          </li>
          <li>
            <a href="test">Drama</a>
          </li>
          <li>
            <a href="test">War</a>
          </li>
          <li>
            <a href="test">Documantary</a>
          </li>
          <li>
            <a href="test">Mestry</a>
          </li>
          <li>
            <a href="test">Comedy</a>
          </li>
          <li>
            <a href="test">Animation</a>
          </li>
          <li>
            <h1>Language</h1>
          </li>
          <li>
            <a href="test">EN</a>
          </li>
          <li>
            <a href="test">FR</a>
          </li>
        </ul>
      </div>
      <div className="overaly-block2">
        <div className="crous">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className=" Img d-block w-100"
                src="https://image.tmdb.org/t/p/w1280/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="crous-info">
                <h5 className="crous-tilte">The Beekeeper</h5>
                <p className="crous-decr">
                  One man's campaign for vengeance takes on national stakes
                  after he is revealed to be a former operative of a powerful
                  and clandestine organization known as Beekeepers...
                </p>
                <Button className="btn-x" variant="danger">
                  Watch Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" Img d-block w-100"
                src="https://image.tmdb.org/t/p/w1280/criPrxkTggCra1jch49jsiSeXo1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption className="crous-info">
                <h5 className="crous-tilte">The Marvels</h5>
                <p className="crous-decr">
                  Carol Danvers, aka Captain Marvel, has reclaimed her identity
                  from the tyrannical Kree and taken revenge on the Supreme
                  Intelligence...
                </p>
                <Button className="btn-x" variant="danger">
                  Watch Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="Img d-block w-100"
                src="https://image.tmdb.org/t/p/w1280/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg"
                alt="Third slide"
              />
              <Carousel.Caption className="crous-info">
                <h5 className="crous-tilte">Badland Hunters</h5>
                <p className="crous-decr">
                  After a deadly earthquake turns Seoul into a lawless badland,
                  a fearless huntsman springs into action to rescue...
                </p>
                <Button className="btn-x" variant="danger">
                  Watch Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="movieUpcoming">
          <h1 className="head">UpComing Movies</h1>
          <div className="allCards">
         
            {dataMovieState
              .filter((Movie) =>
                Movie.title
                .toLocaleLowerCase()
                .includes(valueTitle.toLocaleLowerCase())  
              )
              .map((Movie) => (
                <CardFilm key={Movie.id} Movie={Movie} />
              ))} 
          </div>
        </div>
        <div className="thisweek">
          <h1 className="head">This week</h1>
          <div className="allCards">
            {dataThisWeek.map((film) => (
              <CardFilm key={film.id} Movie={film} />
            ))}
          </div>
        </div>
        <div className="top treending">
          <h1 className="head">Top treending</h1>
          <div className="allCards">
            {dataTopTreending.map((movie) => (
              <CardFilm key={movie.id} Movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
