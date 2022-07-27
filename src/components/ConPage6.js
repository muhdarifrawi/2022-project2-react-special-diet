import React from "react";
import "../css/ConPage.css"

export default class ConPage4 extends React.Component {
    state = {
        days: [
            {
                display: "Monday",
                value: "monday"
            },
            {
                display: "Tuesday",
                value: "tuesday"
            },
            {
                display: "Wednesday",
                value: "wednesday"
            },
            {
                display: "Thursday",
                value: "thursday"
            },
            {
                display: "Friday",
                value: "friday"
            },
            {
                display: "Saturday",
                value: "saturday"
            },
            {
                display: "Sunday",
                value: "sunday"
            },
            {
                display: "Public Holiday",
                value: "publicHoliday"
            },
        ],
        mondayHours:"",
        tuesdayHours:"",
        wednesdayHours:"",
        thursdayHours:"",
        fridayHours:"",
        saturdayHours:"",
        sundayHours:"",
        publicHolidayHours:"",
    }

    hoursEntry = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    Just one last thing
                </h1>
                <label>We'd like to know the time</label>
                {
                    this.state.days.map(day => 
                        <React.Fragment key={day.value}>
                            <h2>{day.display}</h2>
                            <label>Opening Hours</label>
                            <input type="text" className="nameInput"
                                name={day.value + "Hours"}
                                placeholder="11:00 am - 09:00 pm" 
                                onChange={this.hoursEntry}/>
                            <label>Are you sure about the time?</label>
                            <input type="radio" name={day.value + "Unsure"} />
                            <label>Yes</label>
                            <input type="radio" name={day.value + "Unsure"} />
                            <label>No</label>
                        </React.Fragment>
                    )
                }

            </React.Fragment>
        )
    }
}