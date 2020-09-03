import React from "react"

export const Product = ({product}) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">{product.price}</div>
        <div className="product__type">Product Type: {product.typeId}</div>
    </section>
)