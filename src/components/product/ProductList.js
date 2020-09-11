import React, {useContext, useEffect} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import {ProductTypeContext} from "./ProductTypeProvider"

export const ProductList = (props) => {
    const {products, getProducts} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext)

    useEffect(() => {
        getProducts()
        getProductTypes()
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    const productType = productTypes.find(pt => pt.id === product.productTypeId) || {}
                
                return <Product key={product.id} product={product} productType={productType} {...props}/>
                })
            }

        </div>
    )
}