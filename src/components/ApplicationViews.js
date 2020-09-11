import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider} from "./product/ProductTypeProvider"
import {EmployeeProvider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeForm} from "./employee/EmployeeForm"
import {OrderList} from "./product/OrderList"
import { CustomerCandyProvider } from "./product/CustomerCandyProvider"
import {CustomerProvider} from "./customer/CustomerProvider"
import {CustomerList} from "./customer/CustomerList"
import { InventorySearch } from "./inventory/InventorySearch"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
            
            <ProductProvider>
                <ProductTypeProvider>
                    <CustomerCandyProvider>
                        <Route exact path="/products" render= {
                            props => {
                                return <>
                            <InventorySearch />
                            <ProductList {...props}/>
                            </>
                            }
                        } />
                    </CustomerCandyProvider>
                </ProductTypeProvider>
            </ProductProvider>

            <ProductProvider>
                <ProductTypeProvider>
                    <CustomerCandyProvider>
                    <Route exact path="/orders">
                        <OrderList />
                    </Route>
                    </CustomerCandyProvider>
                </ProductTypeProvider>
            </ProductProvider>
            
            <EmployeeProvider>          
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props =>  <EmployeeList {...props}/>
                    } />
                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />
                </LocationProvider>
            </EmployeeProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}