import React, { useEffect, useState, useContext } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationDetail = (props) => {
    const { locations, getLocations, getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
        const locationId = parseInt(props.match.params.locationId)
        getLocationById(locationId)
            .then(setLocation)
    }, [])
    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <div className="location__handicap">Handicap Accessible: {String(location.handicap)}</div>
        </section>
    )
}