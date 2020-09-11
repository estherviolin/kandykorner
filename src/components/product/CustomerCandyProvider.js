import React, {useState} from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => { //is props an object?
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders")
            .then(res => res.json())
            .then(setOrders)
    }

    const addOrders = order => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(getOrders)
    }
    
    return (
        <CustomerCandyContext.Provider value={{
            orders, addOrders, getOrders
        }}>
            {props.children} 
        </CustomerCandyContext.Provider>
    )

 } //so then you get the children of props??