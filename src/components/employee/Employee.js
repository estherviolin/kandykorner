import React from "react"

export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {employee.location.name}</div>
        <div className="employee__manager">Manager: {String(employee.manager)}</div>
        <div className="employee__fulltime">Full time: {String(employee.fulltime)}</div>
        <div className="employee__rate">Hourly Rate: {employee.hourlyRate}</div>
    </section>
)