import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider} from "./product/ProductTypeProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
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
        </>
    )
}