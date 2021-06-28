import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobAdvertService from '../../services/jobAdvertService';
import { Card, Grid, Table, Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { darkblue } from 'color-name';

export default function JobAdvertDetail() {

    let { id } = useParams();

    const [jobAdvert, setjobAdvert] = useState([]);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getById(id).then((result) => setjobAdvert(result.data.data));
        
    }, [id]);


    return (
        <div>
            <Card fluid color={"dark blue"} >
                <Card.Content header="Description for the Advert" />
                <Card.Content>
                    {jobAdvert.jobDescription}
                </Card.Content>
            </Card>


            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Table celled fixed singleLine color={darkblue}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Job Advert</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Job Title</Table.Cell>
                                    <Table.Cell>{jobAdvert.jobTitle?.title}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Working Place</Table.Cell>
                                    <Table.Cell>{jobAdvert.workPlace?.name}</Table.Cell>
                                </Table.Row>


                                <Table.Row>
                                    <Table.Cell>Work Time</Table.Cell>
                                    <Table.Cell>{jobAdvert.workTime?.name}</Table.Cell>
                                </Table.Row>


                                <Table.Row>
                                    <Table.Cell>City</Table.Cell>
                                    <Table.Cell>{jobAdvert.city?.cityName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Min Salary</Table.Cell>
                                    <Table.Cell>{jobAdvert.salaryMin}</Table.Cell>
                                </Table.Row>


                                <Table.Row>
                                    <Table.Cell>Max Salary</Table.Cell>
                                    <Table.Cell>{jobAdvert.salaryMax}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Open Position</Table.Cell>
                                    <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Release Date </Table.Cell>
                                    <Table.Cell>{jobAdvert.applicationDate}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell> Deadline </Table.Cell>
                                    <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
                                </Table.Row>


                            </Table.Body>
                        </Table>
                    </Grid.Column>


                    <Grid.Column width={16}>
                        <Table celled color={'purple'} stackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell >Employer</Table.HeaderCell>
                                    <Table.HeaderCell>Information</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row textAlign={'left'}>
                                    <Table.Cell>
                                        <Header as="h5" image>
                                            <Header.Content>
                                                <Icon name="building outline " />
                                                Company Name
                                            </Header.Content>
                                        </Header>

                                    </Table.Cell>
                                    <Table.Cell>
                                        {jobAdvert.employer?.companyName}
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={'left'}>
                                    <Table.Cell>
                                        <Header as="h5" image>
                                            <Header.Content>
                                                <Icon name="mail outline " />
                                                Email Address
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {jobAdvert.employer?.email}
                                    </Table.Cell>
                                </Table.Row>



                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h5" image>
                                            <Header.Content>
                                                <Icon name="globe" />
                                                Website
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {jobAdvert.employer?.webAddress}
                                    </Table.Cell>
                                </Table.Row>

      
                              
                                <Table.Row textAlign={'left'}>
                                    <Table.Cell>
                                        <Header as="h5" image>
                                            <Header.Content>
                                                <Icon name="phone square " />
                                                Phone Number
                                            </Header.Content>
                                        </Header>

                                    </Table.Cell>

                                    <Table.Cell>
                                        {jobAdvert.employer?.phoneNumber}
                                    </Table.Cell>
                                </Table.Row>


                            </Table.Body>
                        </Table>

                        <Table.Cell >
                            <Button animated as={Link} to={`/employerDetail/${jobAdvert.employer?.id}`} color="light purple" >
                                <Button.Content visible> Look Details of Employer Information ! </Button.Content>
                                <Button.Content hidden>
                                    <Icon name="arrow right" />
                                </Button.Content>
                            </Button>
                        </Table.Cell>

                    </Grid.Column>


                </Grid.Row>
            </Grid>
        </div>
    )
}
