import React, { createContext, useState } from 'react'


export const UserModalContext = createContext()

export default function ModalContextProvider({ children }) {
    const [userModal, setUserModal] = useState({ show: false, type: "", data: {} })
    return (

        <UserModalContext.Provider value={[userModal, setUserModal]}>
            {children}
        </UserModalContext.Provider>

    )
}
