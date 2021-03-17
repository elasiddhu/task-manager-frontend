// import React
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import layouts

// import components

// import styles
import styles from '../styles/SignupCard.module.css'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [user, setUser] = useState(true)

    const submitHandler = (e) => {
        e.preventDefault() // called to prevent a browser reload/refresh (dont want to lose states before performing actions in the onSubmit)
        console.log('submit')
        console.log('email', email)
        console.log('password', password)
        console.log('password confirmation', passwordConfirm)
        setUser(true)
    }

    return (
        <>
            {   !user ?
                    <div className={styles.container}>
                        <h1 className={styles.signup}>Sign Up</h1>
                        <form className={styles.formstyle} onSubmit={submitHandler}>
                            <input className={styles.inputstyle} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                            <input className={styles.inputstyle} value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password"/>
                            <input className={styles.inputstyle} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="text" placeholder="Confirm Password"/>
                            <button className={styles.btn} type="submit">Sign Up</button>
                        </form>
                        <div className={styles.login}>
                            <span>Already have an account?</span><Link className={styles.link} to="/login">Log In.</Link>
                        </div>
                    </div>
                :
                    <div className={styles.container}>
                        <h1 className={styles.signup}>Sign Up</h1>
                        <p>Thank you for signing up for my task manager application! There should be an e-mail in your inbox. Make sure to also check your spam folder.</p>
                        <div>Go to your<Link className={styles.link} to="/">Dashboard</Link></div>
                    </div>
            }

        </>
    )
}
