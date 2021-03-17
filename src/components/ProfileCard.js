// import React
import { Link } from 'react-router-dom'
// import layouts

// import components

// import styles
import styles from '../styles/ProfileCard.module.css'

export default function ProfileCard() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Profile</h1>
            <div className={styles.router}>
                <span>Back to your</span><Link className={styles.link} to="/">Dashboard.</Link>
            </div>
            <div className={styles.data}>
                <div className={styles.property}>
                    <div className={styles.property_header}>Username</div>
                    <div className={styles.property_value}>a-fake-username</div>
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
