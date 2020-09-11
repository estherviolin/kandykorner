import React from "react"


export const Order = ({product}) => {
    return (
        <section className="order">
            <h3 className="order__name">{product.name}</h3>
            <div className="order__price">${product.price}</div>
        </section>
    )
}