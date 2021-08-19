import React from "react";
import { Link } from "react-router-dom"
import userData from "../../utils/store/Store"
import Login from "../login";

export default function Home(){
    console.log(userData.getState())
    const user = userData.getState();
    return (
        
            user ? <Login/> : <p>Bienvenido</p>
        
    )
}