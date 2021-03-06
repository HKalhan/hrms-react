import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div>
             <Menu inverted icon="labeled" vertical color='grey'>
              <Menu.Item as={NavLink} to="/jobAdverts">
                <Icon name="share square outline" />
                Job Adverts
              
              </Menu.Item>
             <Menu.Item as ={NavLink} to ="/candidates" >
                <Icon name="user" />
                Candidate
             </Menu.Item>
             <Menu.Item as ={NavLink} to ="/employers">
                <Icon name="user" />
                Employer
             </Menu.Item>
             <Menu.Item as={NavLink} to="/employees">
                <Icon name="user" />
                 Employee
            </Menu.Item>
          </Menu>
        </div>
    )
}
