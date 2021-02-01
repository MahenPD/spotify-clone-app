import React from 'react'
import { accessUrl } from '../spotify'
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <img src="" alt="" />

            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
