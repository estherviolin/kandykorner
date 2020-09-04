import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"


export const EmployeeForm = (props) => {
    const { addEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.
        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const fulltime = useRef(null)
    const hourlyRate = useRef(null)

  

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getLocations()
    }, [])

    const constructNewEmployee = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)
        

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployees({
                name: name.current.value,
                locationId,
                manager: JSON.parse(manager.current.value),
                fulltime: JSON.parse(fulltime.current.value),
                hourlyRate: hourlyRate.current.value
            })
            .then(() => props.history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Is this person a manager? </label>
                    <label><input type="radio" name="manager" ref={manager} id="employeeManager" className="form-control" value="true"/>Yes</label>
                    <label><input type="radio" name="manager" ref={manager} id="employeeManager" className="form-control" value="false"/>No</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fulltime">Does this person work full time? </label>
                    <input type="text" defaultValue="" name="fulltime" ref={fulltime} id="employeefulltime" className="form-control" placeholder="true or false"/>
                    <label><input type="radio" name="fulltime" ref={fulltime} id="employeefulltime" className="form-control" value="true"/>Yes</label>
                    <label><input type="radio" name="fulltime" ref={fulltime} id="employeefulltime" className="form-control" value="false"/>No</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>
                    <input type="text" defaultValue="" name="hourlyRate" ref={hourlyRate} id="employeehourlyRate" className="form-control" placeholder="enter a number"/>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                    
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}


{/* <fieldset>
<div className="form-group">
    <label htmlFor="manager">Is this person a manager? </label>
    <input type="text" defaultValue="" name="manager" ref={manager} id="employeeManager" className="form-control" placeholder="true or false"/>
</div>
</fieldset> */}
{/* <fieldset>
<div className="form-group">
    <label htmlFor="fulltime">Does this person work full time? </label>
    <input type="text" defaultValue="" name="fulltime" ref={fulltime} id="employeefulltime" className="form-control" placeholder="true or false"/>
</div>
</fieldset> */}