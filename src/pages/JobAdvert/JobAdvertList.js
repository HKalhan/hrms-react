import React from 'react'
import { Icon, Header, Table, Button,Link } from 'semantic-ui-react'
import JobAdvertService from '../../services/jobAdvertService';
import {useState, useEffect} from 'react';

import { NavLink } from 'react-router-dom';
import JobAdvertDetail from './JobAdvertDetail';
export default function JobAdvertList() {

    const [jobAdverts, setjobAdverts] = useState([]);

    useEffect(() => {
       let jobAdvertService= new JobAdvertService()
       jobAdvertService.getAllJobAdverts().then((result)=>setjobAdverts(result.data.data))
    }, []);


    return (
        <div>
              <Header as="h2">
        <Icon name="unordered list" />
        <Header.Content>Job Advert List</Header.Content>
      </Header>
      <Table color="purple" key="purple">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Active</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {jobAdverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert.id}>
                    <Table.Cell>{jobAdvert.jobTitle.title}</Table.Cell>
                    <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                    <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
                    <Table.Cell>{jobAdvert.active.toString()}</Table.Cell>
                    <Table.Cell><Button as ={NavLink} to = "/jobAdvertDetail">View</Button></Table.Cell>
                    
                    </Table.Row>
            ))}
        </Table.Body>

        </Table>

        </div>
    )
}
