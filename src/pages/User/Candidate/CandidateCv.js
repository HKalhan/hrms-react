import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Image , Header, Icon, Table} from 'semantic-ui-react';
import CandidateService from '../../../services/candidateService';

export default function CandidateCv() {

    let{candidateId} = useParams();

    const [cv, setcv] = useState([]); //{} koymuş?

    useEffect(() => {
        let candidateService= new CandidateService
        candidateService.getByCV(candidateId).then((result)=>{

            setcv(result.data.data)
        })
    }, [])

    return (
        <div>
            
            <Grid celled columns={"2"}>
                <Grid.Row>
                    <Grid.Column width={6} >

                        <Image src={cv.image?.url} size="small" verticalAlign="middle" />
                        <Header as="h2">
                            {cv.candidate?.firstName + " " + cv.candidate?.lastName}
                        </Header>
                        <Header as="h4">
                            Date of Birth :
                            <Header.Subheader>
                                {cv.candidate?.birthDate}
                            </Header.Subheader>
                        </Header>

                        <Header as="h3" floated="left">
                            Contact:
                            <Header.Subheader>
                                <Icon name='send' />
                                Turkey
                            </Header.Subheader>

                            <Header.Subheader>
                                <Icon name="mail square " />
                                {cv.candidate?.email}
                            </Header.Subheader>

                            <Header.Subheader>
                                <Icon name= " phone square"/>
                                {cv.candidate?.phoneNumber}
                            </Header.Subheader>
                            
                            <Header.Subheader>
                                     <Icon name="github square" />
                                     {cv.candidate?.githubAddress} 
                                 </Header.Subheader>
                                
                                 <Header.Subheader>
                                     <Icon name="linkedin alternate"  />
                                     {cv.candidate?.linkedinAddress}
                                 </Header.Subheader>    

                        </Header>

                    </Grid.Column>



                    <Grid.Column width={10}>
                       
                        <Header as="h3">
                            <Icon name= 'user' />
                            <Header.Content>ABOUT ME</Header.Content>
                            <Header.Subheader>
                                {cv.coverLetters?.contentPost}
                            </Header.Subheader>
                        </Header>

                        <Header as="h3">
                            <Icon name=' edit' />
                            <Header.Content>EDUCATION AND TRAINING</Header.Content>
                            <Header.Subheader>
                                 <Table celled color={"blue"}>
                                     <Table.Header>
                                         <Table.Row>
                                             <Table.HeaderCell>University Name</Table.HeaderCell>
                                             <Table.HeaderCell>Department</Table.HeaderCell>
                                             <Table.HeaderCell>Starting Date</Table.HeaderCell>
                                             <Table.HeaderCell>Graduation Year</Table.HeaderCell>
                                         </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {cv.schools?.map((experience) =>(
                                            <Table.Row key={experience.id}>
                                            <Table.Cell>{experience.schoolName}</Table.Cell>
                                            <Table.Cell>{experience.department}</Table.Cell>
                                            <Table.Cell>{experience.startDate}</Table.Cell>
                                            <Table.Cell>{experience.graduationDate}</Table.Cell>
                                        </Table.Row>
                                        ))}
                                    </Table.Body>
                                    </Table>

                                    </Header.Subheader>
                                    </Header>

                                   
                                    <Header as = "h3">
                                    <Icon name='building' />
                            <Header.Content>WORK EXPERIENCE</Header.Content>
                            <Header.Subheader>
                                <Table celled color={"blue"}>
                                    <Table.Header>
                                         <Table.Row>
                                             <Table.HeaderCell>Work Place</Table.HeaderCell>
                                             <Table.HeaderCell>Position</Table.HeaderCell>
                                             <Table.HeaderCell>Starting Date</Table.HeaderCell>
                                             <Table.HeaderCell>Leave Date</Table.HeaderCell>
                                         </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {cv.experiences?.map((experience) => (
                                        <Table.Row key={experience.id}>
                                            <Table.Cell>{experience.working_place}</Table.Cell>
                                            <Table.Cell>{experience.position}</Table.Cell>
                                            <Table.Cell>{experience.startDate}</Table.Cell>
                                            <Table.Cell>{experience.leaveDate}</Table.Cell>
                                        </Table.Row>
                                         ))}
                                   </Table.Body>
                                </Table>
                            </Header.Subheader>
                        </Header>


                        <Header as='h3'>
                            <Icon name='language' />
                            <Header.Content>LANGUAGE SKILLS</Header.Content>
                            <Header.Subheader>
                                <Table celled color={"blue"}>
                                    <Table.Header>
                                         <Table.Row>
                                             <Table.HeaderCell>Foreign Language</Table.HeaderCell>
                                             <Table.HeaderCell>Level </Table.HeaderCell>
                                         </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {cv.foreignLanguages?.map((language) => (
                                        <Table.Row key={language.id}>
                                            <Table.Cell>{language.language}</Table.Cell>
                                            <Table.Cell>{language.level}</Table.Cell>
                                        </Table.Row>
                                         ))}
                                   </Table.Body>
                                </Table>
                            </Header.Subheader>
                        </Header>


                        <Header as='h3'>
                            <Icon name= 'code ' />
                            <Header.Content>DIGITAL SKILLS </Header.Content>
                            {cv.programmingAbilities?.map((skills) => (
                            <Header as="h4" floated="left">
                                {skills.name} /
                            </Header>
                            ))} 
                        </Header>      

                    </Grid.Column>



                </Grid.Row>
            </Grid>
        </div>
    )
}
