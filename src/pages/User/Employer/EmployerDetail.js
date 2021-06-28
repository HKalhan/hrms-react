import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Grid, GridColumn, Image, Header ,Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmployerService from '../../../services/employerService';
import JobAdvertService from '../../../services/jobAdvertService';
export default function EmployerDetail() {

  let {id}=useParams();
  

  const [employers, setemployers] = useState([]);
  const [jobAdverts, setjobAdverts] = useState([]);
  useEffect(() => {
   let employerService=new EmployerService();
   employerService.getById(id).then((result) => setemployers(result.data.data));
   }, [id]);


   useEffect(() => {
       let jobAdverts=new JobAdvertService();
       jobAdverts.getActiveAdvertByEmployerId(id).then((result) => setjobAdverts(result.data.data));
   }, [id])
    return (
        <div>

          <Grid celled columns={2}>
              <Grid.Row>
                  <Grid.Column width={6}>

                      <Image src='https://www.logoground.com/uploads/201564272015-09-304956681LetterK.jpg' size ='medium' verticalAlign='middle'  />
                      

                      <Header as="h3" floated=" left">
                      <br/>
                          Contact With Us 
                          
                          <Header.Subheader>
                          <br/>
                              <Icon name='mail square'/>
                              {employers.email}
                          </Header.Subheader>

                          <Header.Subheader>
                          <br/>
                                <Icon name= " phone square"/>
                                {employers.phoneNumber}
                            </Header.Subheader>

                            <Header.Subheader>
                                <br/>
                                <Icon name= "globe " />
                                {employers.webAddress}
                            </Header.Subheader>
                      </Header>
                  </Grid.Column>

                  <Grid.Column width={10}>
                      <Header as="h3">
                          <br/>
                          <Icon name="hand point right outline" />
                          <Header.Content> Get to Know {employers.companyName} Company Better</Header.Content>
                          <Header.Subheader>
                              <br/><br/>
                              {employers.description}
                          </Header.Subheader>
                      </Header>
                  </Grid.Column>
              </Grid.Row>
              
              
              <Grid.Row>
              <Grid.Column width={16}>
              <Header as="h3">
                  <br/>
                            <Icon name= 'hand point right outline'  />
                            <Header.Content   >Here are Job Adverts for {employers.companyName} Company</Header.Content>
                            </Header>

                            {
      jobAdverts.map((jobAdvert)=>(
         
        <Card.Group itemsPerRow="1" key={jobAdverts.id}>
           <br/>
        <Card 
       
        
        as={NavLink} to={`/jobAdvertDetail/${jobAdvert.id}`}
       
        header={jobAdvert.jobTitle?.title}
        meta={jobAdvert.city.cityName}
        description={jobAdvert.jobDescription}

       />
                           

    
    </Card.Group>
   
      ))
    }

    <br/>
   
                  </Grid.Column>    
              </Grid.Row>
          </Grid>

        </div>
    )
}
