import React, { useState } from 'react'
import userData from "../../utils/store/Store"

export default function LoginForm() {
    
    const user = userData.getState();

    const [formState, setFormState] = useState({
        name: user.name,
        pass: user.pass
    })
    
    const requestAuth = () => {
        console.log("Request auth")
        if (formState.name.trim().toLowerCase() === "miguel" && formState.pass.trim().toLowerCase() === "12345") {
            console.log('Logged')
            return true
        }
        return false
    }
    const paramsChange = (param, value) => {
        setFormState({
            ...formState,
            [param]: value
        })
        console.log(formState)
    }

    return(
        <div>
           <h3>Login</h3>
           <form onSubmit={ requestAuth }>
            <p>User: <input type="text" onChange={({ target: { value } }) => paramsChange('name', value)}/></p>
            <p>Pass: <input type="password" onChange={({ target: { value } }) => paramsChange('pass', value)}/></p>
            <input type="button" value="Send" onClick={requestAuth}></input>
           </form>
        </div>
    )
} 