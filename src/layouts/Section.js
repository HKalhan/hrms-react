import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EmployeeList from '../pages/User/Employee/EmployeeList'
import CandidateList from "../pages/User/Candidate/CandidateList"
import EmployerList from "../pages/User/Employer/EmployerList"

export default function Section() {
    return (
        <div>
            <Grid>
            
               
                 <Grid.Row>
                    <GridColumn size={14}>
                        <CandidateList />
                    </GridColumn>
                </Grid.Row>
               
               <Grid.Row>
                <GridColumn size={14}>
                  <EmployerList />
                </GridColumn>
              </Grid.Row>

                <Grid.Row>
                    <GridColumn size={14}>
                        <EmployeeList />
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>
    )
}
