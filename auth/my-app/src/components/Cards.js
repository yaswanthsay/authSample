import React from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function Cards() {
  return (
    <div className='single--card'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="react.jpg" />
  <Card.Body>
    <Card.Title>React JS</Card.Title>
    <Card.Text>
      ReactJS is an efficient and flexible javascript library used for building reusable UI components.
    </Card.Text>
    <Button variant="primary">Component</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Cards