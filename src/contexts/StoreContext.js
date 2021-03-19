import React, { useState } from 'react'

const initialUser = {
    "user": {
        "age": '',
        "_id": '',
        "name": '',
        "email": '',
        "createdAt": '',
        "updatedAt": '',
        "__v": ''
    },
    "token": ''
}

export const GlobalStore = React.createContext()

export default function StoreContext({ children }) {
    const [user, setUser] = useState(initialUser)

    return (
        <GlobalStore.Provider value={{
            user,
            setUser
        }}>
            {children}
        </GlobalStore.Provider>
    )
}
