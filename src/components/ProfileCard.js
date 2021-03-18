// import React
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import layouts

// import components

// import styles
import styles from '../styles/ProfileCard.module.css'
// import utils
import getMyProfile from '../utils/getMyProfile'

export default function ProfileCard() {
    const [profile, setProfile] = useState()

    useEffect(() => {
        setProfile(getMyProfile())
        console.log('ProfileCard.js useEffect() profile\n', profile)
    }, [profile])

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Profile</h1>
            <div className={styles.router}>
                <span>Back to your</span><Link className={styles.link} to="/">Dashboard.</Link>
            </div>
            <div className={styles.data}>
                <div className={styles.property}>
                    <div className={styles.property_header}>Name</div>
                    <div className={styles.property_value}>{profile.user.name || 'fake name'}</div>
                </div>
                <div className={styles.property}>
                    <div className={styles.property_header}>Avatar</div>
                    <div className={styles.property_value}>Change your avatar</div>
                    <div className={styles.property_avatar}></div>
                </div>
            </div>
        </div>
    )
}
