import React, {useContext, useEffect} from "react"
import {LocationContext} from "./LocationProvider"
import {Location} from "./Location"

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
    }, [locations])

    return (
        <div className="locations">
            {
                locations.map(location => <Location key={location.id} location={location}/>)
            }

        </div>
    )
}