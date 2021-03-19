// import React
import { useState, useEffect, useContext } from 'react'
// import contexts
import { GlobalStore } from '../contexts/StoreContext'
// import utils
import getTasks from '../utils/getTasks'
// import styles
import styles from '../styles/TasksList.module.css'

// function Component(){} instead of const Component = () => {} because you can export default on arrow functions
// also most components will not ONLY return/render. Most will have JS code before returning
export default function TasksList () {
    const { user } = useContext(GlobalStore)
    const [tasks, setTasks] = useState('')
    console.log(tasks)

    useEffect(() => {
        const fetch = async () => {
            const didTasksFetch = await getTasks(undefined, user.token)
            console.log('didTasksFetch\n', didTasksFetch)
            setTasks(didTasksFetch)
        }
        fetch()
    }, [user.token])

    return (
        <>
            {
                !tasks ?
                    <div className={styles.header}>No tasks</div>
                :
                    <div>
                        <div className={styles.header}>Tasks</div>
                        {
                            tasks.map(task =>
                                <>
                                    <div className={styles.container} key={task._id}>
                                        <div className={styles.tasks}> {task.description}</div>
                                    </div>
                                </> 
                            )
                        }
                    </div>
            }
        </>
    )
}