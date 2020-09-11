import React, { useContext } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider"


export const Product = (props) => {
    const { addOrders } = useContext(CustomerCandyContext)
    return (

        <section className="product">
            <h3 className="product__name">{props.product.name}</h3>
            <div className="product__price">{props.product.price}</div>
            <div className="product__type">Product Type: {props.productType.name}</div>
            <button onClick={() => {
                addOrders({
                    productId: props.product.id,
                    customerId: parseInt(localStorage.getItem(("kandy_customer")))
                })
                    .then(() => props.history.push("/orders"))
            }}
            >Purchase</button>
        </section>
    )

}

