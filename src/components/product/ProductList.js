import React, {useContext, useEffect} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
    }, [products])

    return (
        <div className="products">
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }

        </div>
    )
}