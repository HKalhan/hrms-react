import React , {useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import JobAdvertService from '../../services/jobAdvertService';
import { Table, Button } from 'semantic-ui-react';


export default function JobAdvertRequestsList() {

     const [jobAdvertRequests, setjobAdvertRequests] = useState([]);

     
         let jobAdvertService= new JobAdvertService();

         function listJobAdverts(){
        jobAdvertService.getJobAdvertRequests().then((result) => setjobAdvertRequests(result.data.data))
     }

     useEffect(() => {
        listJobAdverts();
     }, [])


     const approve = (id) => {
         jobAdvertService.getApprove(id).then(()=> {
             toast.success("Job Advert approved.");
             listJobAdverts();
         });
     };

     const cancel = (id) => {
        jobAdvertService.getCancel(id).then(()=> {
            toast.success("Job Advert cancelled.");
            listJobAdverts();
        });
    };

    return (
        <div>
             <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Work Place</Table.HeaderCell>
            <Table.HeaderCell>Work Time</Table.HeaderCell>
            <Table.HeaderCell>Salary </Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertRequests.map((advert) => (
            <Table.Row key={advert.id}>
              <Table.Cell>{advert.employer.companyName}</Table.Cell>
              <Table.Cell>
              {advert.jobTitle.name}
              </Table.Cell>
              <Table.Cell>{advert.city.name}</Table.Cell>
              <Table.Cell>{advert.workPlace.name}</Table.Cell>
              <Table.Cell>{advert.workTime.name}</Table.Cell>
              <Table.Cell>{advert.salaryMin}-{advert.salaryMax}</Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                <Button
                  color="green"
                  icon="check"
                  onClick={() => approve(advert.id)}
                ></Button>
                <Button
                  color="red"
                  icon="delete"
                  onClick={() => cancel(advert.id)}
                ></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
