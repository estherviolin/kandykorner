import React, {useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"


export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    useEffect(() => {
        getEmployees()
        
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick= {() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
            {
                employees.map(employee => <Employee key={employee.id} employee={employee}/>)
                
            }
            </article>    
        </div>
    )
}