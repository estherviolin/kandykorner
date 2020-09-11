import React, {useContext, useEffect} from "react"
import {CustomerContext} from "./CustomerProvider"
import {Customer} from "./Customer"


export const CustomerList = (props) => {
    const {customers, getCustomers} = useContext(CustomerContext)
    useEffect(() => {
        getCustomers()
        
    }, [])

    return (
        <div className="customers">
            <h1>Customers</h1>
            <article className="customerList">
            {
                customers.map(customer => <Customer key={customer.id} customer={customer}/>)
                
            }
            </article>    
        </div>
    )
}