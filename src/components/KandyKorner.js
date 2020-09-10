import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


export const KandyKorner = () => (
    <>

    <Route render={() => {
        if (localStorage.getItem("kandy_customer")) {
            return (
                <>
                <Route render={props => <NavBar {...props} />} />
                <Route render={props => <ApplicationViews {...props} /> } />
                </>
            )
        } else {
            return <Redirect to="/login" />
        }
    }} />
       <Route path="/login" render={props => <Login {...props} /> } />
       <Route path="/register" render={props => <Register {...props} /> } />
      
    </>
)

/* <article className="locations">
<LocationProvider>
    <LocationList/>
</LocationProvider>
</article>
<article className="products">
<ProductProvider>
    <ProductList/>
</ProductProvider>
</article> */