import React from 'react'
import "../CSS/mycards.css"
import { Button, Card } from "react-bootstrap";

const CardFilm = ({Movie}) => {
  return (
    <>
    <div className='Card-design'>
        <Card className="mycards" style={{ width: '15rem', height:'200px' }}>
        <Card.Img variant="top" src={Movie.image} />
        <Card.Body>
          <Card.Title className='title'>{Movie.title}</Card.Title>
          <div className="info">
          <Card.Text className='rate'> <i class="fa-solid fa-star"/> 
           {Movie.rate}
          </Card.Text> 
          <p className='year'>{Movie.year}</p>
          </div>
          <Button className='bnt' variant="outline-danger">Watch Now</Button>
          
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default CardFilm
