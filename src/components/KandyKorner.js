import React from "react"
import {LocationList} from "./location/LocationList"
import {LocationProvider} from "./location/LocationProvider"

export const KandyKorner = () => (
    <>
        <h2>KandyKorner</h2>

        <article className="locations">
            <LocationProvider>
                <LocationList/>
            </LocationProvider>
        </article>
    </>
)