import React, {useContext, useEffect, useState} from "react"
import {EmployeeContext} from "./EmployeeProvider"


export const Employee = (props) => {
    const {employees, deleteEmployee} = useContext(EmployeeContext)
  

    const [employee, setEmployee] = useState({})

return (
    <section className="employee">
        <h3 className="employee__name">{props.employee.name}</h3>
        <div className="employee__location">Location: {props.employee.location.name}</div>
        <div className="employee__manager">Manager: {String(props.employee.manager)}</div>
        <div className="employee__fulltime">Full time: {String(props.employee.fulltime)}</div>
        <div className="employee__rate">Hourly Rate: {props.employee.hourlyRate}</div>
        <button className="employee__fire" onClick={() => {
            deleteEmployee(props.employee.id)
                .then(() => {
                    props.history.push("/employees")
                })
        }} >Fire Employee</button>
    </section>
)

    }