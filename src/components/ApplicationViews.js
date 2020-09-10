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

export const ApplicationViews = (props) => {
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
                    <Route exact path="/products">
                        <ProductList />
                    </Route>
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
        </>
    )
}