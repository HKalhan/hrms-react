import React, {useState} from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'
import Language from './Language'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(params){
        setIsAuthenticated(false)
    }

    function handleSignIn(params){
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="large" color='grey'>
                <Container>
                    <Menu.Item name="H">
                        <Icon name="h square" size="large" />
                        HRMS
                    </Menu.Item>

                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <Language />
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                       
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    );
}
