import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertService from '../../services/jobAdvertService'

export default function JobAdvertDetail() {

    const [jobAdverts, setjobAdverts] = useState([])

    let {employerId} = useParams();


    useEffect(() => {
        let jobAdvertService =new JobAdvertService()
        jobAdvertService.getById (employerId).then(result => setjobAdverts(result.data.data))
    }, [employerId])

    return(
        <div>
           
      <Card.Group>
    <Card fluid>

        { jobAdverts.map(advert=> (
      <Card.Content key = {advert.id}> 
        <Image
          floated='right'
          size='mini'
          src=''
        />

        <Card.Header>{advert.employer.companyName}</Card.Header>
        <Card.Meta>{advert.jobtitle.title}</Card.Meta>
        <Card.Description>
          Req : {advert.jobDescription} / {advert.salaryMin} / {advert.salaryMax} // {advert.city.cityName}
        </Card.Description>
      </Card.Content>
     ))}
     
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='purple'>
            Approve
          </Button>
          <Button basic color='pink'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
        </div>
    

   
    )
}
