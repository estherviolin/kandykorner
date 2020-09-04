import React, {useState} from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => { //is props an object?
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductTypes = productType => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productType)
        })
        .then(getProductTypes)
    }
    
    return (
        <ProductTypeContext.Provider value={{
            productTypes, addProductTypes, getProductTypes
        }}>
            {props.children} 
        </ProductTypeContext.Provider>
    )

 } //so then you get the children of props??