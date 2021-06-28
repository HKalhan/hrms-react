import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button inverted color='black' onClick={signIn}>Sign In</Button>
            <Button inverted color='grey' style={{marginLeft:'0.5em'}}>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
