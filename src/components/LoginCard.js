// import React
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import layouts

// import components

// import styles
import styles from '../styles/LoginCard.module.css'

// import utils
import userLogin from '../utils/userLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(false)

    const onSubmit = async (e) => {
        // call preventDefault() to prevent a browser reload/refresh (dont want to lose states before performing actions in the submit handler)
        e.preventDefault()
        console.log('LoginCard.js Submit')
        const payload = {
            "email": email,
            "password": password
        }
        console.log('payload', payload) // temp line
        const didUserLogin = await userLogin(payload)
        console.log('didUserLogin', didUserLogin)
        setUser(true)
    }

    return (
        <>
            {
                !user ?
                    <div className={styles.container}>
                        <h1 className={styles.login}>Log In</h1>
                        <form className={styles.formstyle}>
                            <input className={styles.inputstyle} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                            <input className={styles.inputstyle} value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password"/>
                        </form>
                        <div className={styles.link_container}>
                            <span>Need an account?</span><Link className={styles.link} to="/signup">Sign up.</Link>
                        </div>
                        <div className={styles.btncontainer}><button className={styles.btn} onClick={onSubmit} type="submit">Login</button></div>
                    </div>
                :
                    <div className={styles.container}>
                        <h1 className={styles.login}>Log In</h1>
                        <p className={styles.p_style}>Thank you for signing up for my task manager application! There should be an e-mail in your inbox. Make sure to also check your spam folder.</p>
                        <div className={styles.link_container}>Go to your<Link className={styles.link} to="/">Dashboard</Link></div>
                    </div>  
            }
        </>

    )
}
