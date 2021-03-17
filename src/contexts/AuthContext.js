import React from 'react'

export default function AuthContext({ children }) {
    return (
        <div>
            user ? {children} : <div>Please Log In or Sign Up.</div>
        </div>
    )
}
