import React, {useContext, useEffect} from "react"
import {CustomerCandyContext} from "./CustomerCandyProvider"
import {ProductContext} from "./ProductProvider"
import {Order} from "./Order"


export const OrderList = () => {
    const {orders, getOrders} = useContext(CustomerCandyContext)
    const {products, getProducts} = useContext(ProductContext)
   

    useEffect(() => {
        getOrders()
        getProducts()
    }, [])

    return (
        <div className="orders">
            {
                orders.map(order => {
                    const product = products.find(product => product.id === order.productId) || {}
                
                return <Order key={order.id} product={product} order={order}/>
                })
            }

        </div>
    )
}