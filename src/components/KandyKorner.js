import React from "react"
import {LocationList} from "./location/LocationList"
import {LocationProvider} from "./location/LocationProvider"
import {ProductList} from "./product/ProductList"
import {ProductProvider} from "./product/ProductProvider"

export const KandyKorner = () => (
    <>
        <h2>KandyKorner</h2>

        <article className="locations">
            <LocationProvider>
                <LocationList/>
            </LocationProvider>
        </article>
        <article className="products">
            <ProductProvider>
                <ProductList/>
            </ProductProvider>
        </article>
    </>
)