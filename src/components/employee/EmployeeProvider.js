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
    
    return (
        <EmployeeContext.Provider value={{
            employees, addEmployees, getEmployees
        }}>
            {props.children} 
        </EmployeeContext.Provider>
    )

 } //so then you get the children of props??
