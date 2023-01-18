import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import data from '../responses/allbondsresponse.json'
import Button from 'react-bootstrap/Button'

const BondCard = () => {

  const DisplayCard = data.map(

    (bonddetails) => {
      return (

        <div className='bondcard' key={bonddetails.bondid}>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Bond ID :
              {bonddetails.bondid}</Card.Title>
            <Card.Text>

              Entity : {bonddetails.entity}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Amount : {bonddetails.amount}</ListGroup.Item>
            <ListGroup.Item>Currency : {bonddetails.currency}</ListGroup.Item>
            <ListGroup.Item>Issued On : {bonddetails.issuedon}</ListGroup.Item>
            <ListGroup.Item>Maturity On : {bonddetails.maturityon}</ListGroup.Item>
            <ListGroup.Item>CBI Certified : {bonddetails.cbicertified}</ListGroup.Item>
            <ListGroup.Item>SPO Provider : {bonddetails.spoprovider}</ListGroup.Item>

          </ListGroup>
          <Card.Body>
            <Button  varient="primary">View Projects</Button>
          </Card.Body>
        </Card>

        </div>

      )
    }

  )

  return (
    <div className='cardscontainer'>

      {DisplayCard}

    </div>
  )
}

export default BondCard