// import React
import { useState, useContext } from 'react'
// import utils
import createTask from '../utils/createTask'
// import contexts
import{ GlobalStore } from '../contexts/StoreContext'
// import styles
import styles from '../styles/NewTask.module.css'

// function Component(){} instead of const Component = () => {} because you can export default on arrow functions
// also most components will not ONLY return/render. Most will have JS code before returning
export default function NewTask () { 
    const { user } = useContext(GlobalStore)
    const [input, setInput] = useState('')
    console.log('user', user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        //http post request to /tasks in task-manager-api
        const payload = {
            "description": input
        }
        const didTaskCreate = await createTask(payload, user.token)
        console.log('didTaskCreate\n', didTaskCreate)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <form onSubmit={handleSubmit}>
                        <input className={styles.input} value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Enter a new task..."/>
                    </form>
                </div>
            </div>
        </>
    )
}