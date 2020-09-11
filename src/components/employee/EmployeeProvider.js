import React, {useState} from "react"

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => { //is props an object?
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployees = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }

    const deleteEmployee = employeeId => {
        return fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: "DELETE"
        })
            .then(getEmployees)
    }
    
    return (
        <EmployeeContext.Provider value={{
            employees, addEmployees, getEmployees, deleteEmployee
        }}>
            {props.children} 
        </EmployeeContext.Provider>
    )

 } //so then you get the children of props??
