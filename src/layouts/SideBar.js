import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
             <Menu inverted icon="labeled" vertical>
              <Menu.Item name="idea">
                <Icon name="idea" />
                Job Adverts
              </Menu.Item>
             <Menu.Item name="users" >
                <Icon name="user" />
                Candidate
             </Menu.Item>
             <Menu.Item name="users">
                <Icon name="user" />
                Employer
             </Menu.Item>
             <Menu.Item name="users">
                <Icon name="user" />
                 Employee
            </Menu.Item>
          </Menu>
        </div>
    )
}
