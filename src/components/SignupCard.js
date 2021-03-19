// import React
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import layouts

// import components

// import styles
import styles from '../styles/SignupCard.module.css'

// import utils
import createUser from '../utils/createUser'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [user, setUser] = useState(false)
    const [error, setError] = useState('')

    const submitHandler = async (e) => {
        // call preventDefault() to prevent a browser reload/refresh (dont want to lose states before performing actions in the submit handler)
        e.preventDefault() 
        console.log('createUser submit handler runs')
        // compare password and password confirmation
        if( password !== passwordConfirm) {
            return setError('Passwords do not match')
        }
        const payload = {
            "name": name,
            "email": email,
            "password": password
        }
        console.log('payload', payload) // temp line
        // createUser handler goes here
        const didUserCreate = await createUser(payload)
        // do not return didUserCreate, this will return a 400: Bad Response
        console.log('didUserCreate', didUserCreate)
        setUser(didUserCreate)
    }

    return (
        <>
            {   !user ?
                    <div className={styles.container}>
                        <h1 className={styles.signup}>Sign Up</h1>
                        {!error ? null : <div className={styles.error}>Error: {error}</div>}
                        <form className={styles.formstyle} onSubmit={submitHandler}>
                            <input className={styles.inputstyle} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
                            <input className={styles.inputstyle} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                            <input className={styles.inputstyle} value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password"/>
                            <input className={styles.inputstyle} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="text" placeholder="Confirm Password"/>
                            <button className={styles.btn} type="submit">Sign Up</button>
                        </form>
                        <div className={styles.link_container}>
                            <span>Already have an account?</span><Link className={styles.link} to="/login">Log In.</Link>
                        </div>
                    </div>
                :
                    <div className={styles.container}>
                        <h1 className={styles.signup}>Sign Up</h1>
                        <p className={styles.p_style}>Thank you for signing up for my task manager application! There should be an e-mail in your inbox. Make sure to also check your spam folder.</p>
                        <div className={styles.link_container}>Go to your<Link className={styles.link} to="/">Dashboard</Link></div>
                    </div>
            }

        </>
    )
}
