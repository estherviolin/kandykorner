import React, {useContext, useEffect, useState} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import {ProductTypeContext} from "./ProductTypeProvider"

export const ProductList = (props) => {
    const {products, getProducts, searchTerms} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext)

    const [ filteredProducts, setFiltered ] = useState([])

    useEffect(() => {
        getProducts()
        getProductTypes()
    }, [])

    useEffect(() => {
        const matchingProducts = products.filter(product => product.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingProducts)
    }, [searchTerms])

    useEffect(() => {
        setFiltered(products)
    }, [products])

    return (
        <div className="products">
            {
                filteredProducts.map(product => {
                    const productType = productTypes.find(pt => pt.id === product.productTypeId) || {}
                
                return <Product key={product.id} product={product} productType={productType} {...props}/>
                })
            }

        </div>
    )
}