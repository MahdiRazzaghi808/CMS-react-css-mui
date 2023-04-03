import React, { createContext, useState } from 'react'


export const InputsContext = createContext()



const initialState = {

    products: {
        show: false,
        type: "",
        data: {
            title: '',
            price: '',
            count: '',
            image: null,
            explain: '',
            off: '',
            priceAfterOff: '',
            showOff: false,
        }
    },

    users: { show: false, type: "", data: {} }
}





function InputsContextProvider({ children }) {
    const [product, setProduct] = useState(initialState);

    return (
        <InputsContext.Provider value={[product, setProduct]}>
            {children}
        </InputsContext.Provider>
    )
}

export default InputsContextProvider