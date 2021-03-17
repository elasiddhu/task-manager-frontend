// import React

// import styles
import styles from '../styles/TasksList.module.css'

// function Component(){} instead of const Component = () => {} because you can export default on arrow functions
// also most components will not ONLY return/render. Most will have JS code before returning
export default function TasksList () { 

    return (
        <div className={styles.tasks}>
            Tasks
        </div>
    )
}