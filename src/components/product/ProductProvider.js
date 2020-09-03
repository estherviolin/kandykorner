import React, {useState} from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => { //is props an object?
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProducts = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(getProducts)
    }
    
    return (
        <ProductContext.Provider value={{
            products, addProducts, getProducts
        }}>
            {props.children} 
        </ProductContext.Provider>
    )

 } //so then you get the children of props??