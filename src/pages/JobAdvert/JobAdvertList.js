import React from 'react'
import { Icon, Header, Table, Button, Card} from 'semantic-ui-react'
import JobAdvertService from '../../services/jobAdvertService';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToFav } from '../../store/actions/favActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
export default function JobAdvertList() {

  const dispatch = useDispatch();

    const [jobAdverts, setjobAdverts] = useState([]);

    useEffect(() => {
       let jobAdverts= new JobAdvertService()
       jobAdverts.getApprovedAdvert().then((result)=>setjobAdverts(result.data.data))
    }, []);

    const handleAddToFav = (jobAdvert) => {
      dispatch(addToFav(jobAdvert));
      toast.success(`${jobAdvert.id} favorilere eklendi!`)
    };

    return (
        <div>
         
              
      <h1 className="extra">
        <Icon name='bullhorn'  />
         Job  Advert   </h1>
   
               <br/><br/>
    {
      jobAdverts.map((jobAdvert)=>(
         
        <Card.Group itemsPerRow="1" key={jobAdverts.id}>
          
        <Card 
        
        as={NavLink} to={`/jobAdvertDetail/${jobAdvert.id}`}
        
        header={jobAdvert.jobTitle?.title}
        meta={jobAdvert.city.cityName}
        description={jobAdvert.jobDescription}

       />
                            <Button animated as={Link} to={`/employerDetail/${jobAdvert.employer?.id}`} basic color="black" 
                            style={{marginLeft:450}}  >
                                <Button.Content visible> {jobAdvert.employer?.companyName} </Button.Content>
                                <Button.Content hidden>
                                    <Icon name="arrow right" />
                                </Button.Content>
                            </Button>


                            <div className="jobAdvert-links" position="bottom-left" >
                                <a href="/#">
                                    <Icon  onClick={()=>handleAddToFav(jobAdvert)} name="like" />
                                </a>
                               </div>
                       

    
    </Card.Group>
   
      ))
    }

    <br/>
   


        </div>
    )
}
