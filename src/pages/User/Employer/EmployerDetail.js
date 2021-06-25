import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
export default function EmployerDetail() {
    return (
        <div>
             <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
           WebSite
          </Button>
          <Button basic color='red'>
           Back To Page
          </Button>
        </div>
      </Card.Content>
    </Card>
   
  </Card.Group>
        </div>
    )
}
