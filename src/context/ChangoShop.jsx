import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Shop = createContext()

const ChangoShop = (children) => {
    
    const [products, setProducts] = useState([])


    return(
        <Shop.Provider value={{products}}>
            {children}
        </Shop.Provider>
    )
}

export default ChangoShop