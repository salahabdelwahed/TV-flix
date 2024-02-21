import React from 'react'
import "../CSS/mycards.css"
import { Button, Card } from "react-bootstrap";

const CardFilm = ({Movie}) => {
  return (
    <>
    <div className='Card-design'>
        <Card className="mycards" style={{ width: '17rem' }}>
        <Card.Img variant="top" src={Movie.image} />
        <Card.Body>
          <Card.Title>{Movie.title}</Card.Title>
          <Card.Text>
           {Movie.rate}
          </Card.Text>
          <Button variant="primary">Watch Now</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default CardFilm
