import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import "../CSS/homePage.css"; 
import "../CSS/mycards.css"
import dataUpComing from '../DB/dataUpcomingFilm.js'


function HomePage() {
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
                className="d-block w-100"
                src="https://image.tmdb.org/t/p/w1280/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>The Beekeeper</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://image.tmdb.org/t/p/w1280/criPrxkTggCra1jch49jsiSeXo1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://image.tmdb.org/t/p/w1280/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div> 
        <div className="movieUpcoming">
         <h1>Upcoming Movies</h1>
        <div className="allCards"> 
        <>
         {dataUpComing.map((Movie)=>  
          <Card className="mycards" key={Movie.id} >
          <Card.Img variant="top" src={Movie.image} />
          <Card.Body>
            <Card.Title>{Movie.title}</Card.Title>
            <Card.Text>
             {Movie.rate}
            </Card.Text>
            <Button variant="primary">Watch Now</Button>
          </Card.Body>
        </Card>
          )}
          </>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
