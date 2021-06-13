import React from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'
import Language from './Language'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="large">
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



                        <Menu.Item>
                            <Button primary>Sign In</Button>
                            <Button negative>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    );
}
