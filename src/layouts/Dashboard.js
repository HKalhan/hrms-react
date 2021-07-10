import React from 'react'
import { Route } from 'react-router';
import { Grid } from 'semantic-ui-react'
import JobAdvertAdd from '../pages/JobAdvert/JobAdvertAdd';
import JobAdvertDetail from '../pages/JobAdvert/JobAdvertDetail';

import JobAdvertList from '../pages/JobAdvert/JobAdvertList';
import CandidateCv from '../pages/User/Candidate/CandidateCv';
import CandidateList from '../pages/User/Candidate/CandidateList';
import EmployeeList from '../pages/User/Employee/EmployeeList';
import EmployerDetail from '../pages/User/Employer/EmployerDetail';

import EmployerList from '../pages/User/Employer/EmployerList';
import Section from "./Section";
import SideBar from "./SideBar";
import JobAdvertRequestsList from '../pages/JobAdvert/JobAdvertRequestsList';


export default function Dashboard() {
    return (
        <div>
           <Grid>
                 <Grid.Row>
                     <Grid.Column width={2}>
                           <SideBar/>
                         </Grid.Column>
                         <Grid.Column width={14}>
                          <Route exact path="/" />
                          <Route exact path="/candidates" component={CandidateList} />
                          <Route exact path="/employers" component={EmployerList} />
                          <Route exact path="/employerDetail/:id" component={EmployerDetail} />
                          <Route exact path="/employees" component={EmployeeList} />
                          <Route exact path="/jobAdverts" component={JobAdvertList} />
                          <Route exact path="/jobAdvertDetail/:id" component={JobAdvertDetail} />
                          <Route exact path="/jobAdvertAdd" component={JobAdvertAdd} />
                        
                          <Route exact path="/CV/:candidateId" component={CandidateCv} />
                          <Route path="/advertRequests" component={JobAdvertRequestsList} />

                         </Grid.Column>
                 </Grid.Row>
             </Grid>
        </div>
    )
}
