import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useUserData = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        logged: false
    })

    // useEffect( () => {
    //     setUserData({
    //         name: 'Miguel',
    //         email: 'm@mail.com'
    //     })
    //     return
    // })
    
    return userData;
    
}

export default function Login(){
    
    const userData = useUserData();

    const authUser = () => {
        console.log('Trying login user')
    }

    const loginForm = () => {
        return(
            <div>
                <form>
                    <input type="text" name="user">user</input>
                    <input type="text" name="pass"/>
                    <input type="button" name="sender"/>
                </form>
            </div>
        )
    }
    
    const welcome = (user) => {
        return(
            <div>
                <Link to="/">Go to home</Link>
                <p>{`Name: ${user.name}`}</p>
            </div>
        )
    }

    return (
        !userData.logged ? loginForm() : welcome()  
    )
}