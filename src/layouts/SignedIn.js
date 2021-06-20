import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item >
                <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Avatar_icon_green.svg/1200px-Avatar_icon_green.svg.png"/>
                <Dropdown pointing="top left" >
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
               </Dropdown>
            </Menu.Item>
        </div>
    )
}
