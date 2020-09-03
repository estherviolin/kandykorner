import React from "react"

export const Location = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__handicap">Handicap Accessible: {location.handicap}</div>
    </section>
)