import React from 'react'
import { Route } from 'react-router';
import { Grid } from 'semantic-ui-react'
import JobAdvertAdd from '../pages/JobAdvert/JobAdvertAdd';
import JobAdvertDetail from '../pages/JobAdvert/JobAdvertDetail';
import JobAdvertList from '../pages/JobAdvert/JobAdvertList';
import CandidateList from '../pages/User/Candidate/CandidateList';
import EmployeeList from '../pages/User/Employee/EmployeeList';
import EmployerList from '../pages/User/Employer/EmployerList';
import Section from "./Section";
import SideBar from "./SideBar";


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
                          <Route exact path="/employees" component={EmployeeList} />
                          <Route exact path="/jobAdverts" component={JobAdvertList} />
                          <Route exact path="/jobAdvertDetail/:employerId" component={JobAdvertDetail} />
                          <Route exact path="/jobAdvertAdd" component={JobAdvertAdd} />

                         </Grid.Column>
                 </Grid.Row>
             </Grid>
        </div>
    )
}
