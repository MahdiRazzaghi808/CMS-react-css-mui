import React, { createContext, useState } from 'react'


export const GetDataContext = createContext()







// initial state
const initialState = {
    products: {
        load: false,
        data: []
    },

    users: {
        load: false,
        data: []
    }

}




function GetDataContextProvider({ children }) {
    const [state, setState] = useState(initialState);


    return (
        <GetDataContext.Provider value={[state, setState]}>
            {children}
        </GetDataContext.Provider>
    )
}

export default GetDataContextProvider