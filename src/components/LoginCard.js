// import React
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import layouts

// import components

// import styles
import styles from '../styles/LoginCard.module.css'

// import utils
//import createUser from '../auth/createUser'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.login}>Log In</h1>
            <form className={styles.formstyle}>
                <input className={styles.inputstyle} value={email} onChange={setEmail} type="text" placeholder="Email"/>
                <input className={styles.inputstyle} value={password} onChange={setPassword} type="text" placeholder="Password"/>
            </form>
            <div className={styles.signup}>
                <span>Need an account?</span><Link className={styles.signuplink} to="/signup">Sign up.</Link>
            </div>
            <div className={styles.btncontainer}><button className={styles.btn} onClick={onSubmit} type="submit">Login</button></div>
        </div>
    )
}
