import React from "react";
import "../css/ConPage.css"

export default class ConPage4 extends React.Component {
    state = {
        days: [
            {
                display: "Monday",
                value: "monday",
                unsureName:"mondayUnsure"
            },
            {
                display: "Tuesday",
                value: "tuesday",
                unsureName:"tuesdayUnsure"
            },
            {
                display: "Wednesday",
                value: "wednesday",
                unsureName:"wednesdayUnsure"
            },
            {
                display: "Thursday",
                value: "thursday",
                unsureName:"thursdayUnsure"
            },
            {
                display: "Friday",
                value: "friday",
                unsureName:"fridayUnsure"
            },
            {
                display: "Saturday",
                value: "saturday",
                unsureName:"saturdayUnsure"
            },
            {
                display: "Sunday",
                value: "sunday",
                unsureName:"sundayUnsure"
            },
            {
                display: "Public Holiday",
                value: "publicHoliday",
                unsureName:"publicHolidayUnsure"
            },
        ],
        mondayHours:"",
        mondayUnsure:false,
        mondayOpen:false,
        tuesdayHours:"",
        tuesdayUnsure:false,
        tuesdayOpen:false,
        wednesdayHours:"",
        wednesdayUnsure:false,
        wednesdayOpen:false,
        thursdayHours:"",
        thursdayUnsure:false,
        thursdayOpen:false,
        fridayHours:"",
        fridayUnsure:false,
        fridayOpen:false,
        saturdayHours:"",
        saturdayUnsure:false,
        saturdayOpen:false,
        sundayHours:"",
        sundayUnsure:false,
        sundayOpen:false,
        publicHolidayHours:"",
        publicHolidayUnsure:false,
        publicHolidayOpen:false,
        "openingHours": [
            {
                "day": "Monday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Tuesday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Wednesday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Thursday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Friday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Saturday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Sunday",
                "opened": true,
                "unsure": false,
                "time": ""
            },
            {
                "day": "Public Holiday",
                "opened": true,
                "unsure": false,
                "time": ""
            }
        ]
    }

    hoursEntry = (event) => {
        // this.setState({
        //     [event.target.name]:event.target.value
        // })

        let newOpeningHours = [ ...this.state.openingHours ]
        let selectedDay = event.target.name
        if(selectedDay == "publicHoliday"){
            selectedDay = "public Holiday"
        }
        selectedDay = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)
        let newHours = newOpeningHours.find(f => f.day == selectedDay)
        newHours.time = event.target.value
        this.setState(newOpeningHours)
        this.props.fillOpeningHours(this.state.openingHours)
    }

    unsureEntry = (event) => {
        let transBoolean = ""
        event.target.value == "yes" ? transBoolean = true : transBoolean = false
        this.setState({
            [event.target.name]:transBoolean
        })
        let newOpeningHours = [ ...this.state.openingHours ]
        let selectedDay = event.target.name
        selectedDay = selectedDay.replace(/Unsure/,"")
        if(selectedDay == "publicHoliday"){
            selectedDay = "public Holiday"
        }
        selectedDay = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)
        let newHours = newOpeningHours.find(f => f.day == selectedDay)
        newHours.unsure = transBoolean
        this.setState(newOpeningHours)
        this.props.fillOpeningHours(this.state.openingHours)
    }

    openedEntry = (event) => {
        let transBoolean = ""
        event.target.value == "yes" ? transBoolean = true : transBoolean = false
        this.setState({
            [event.target.name]:transBoolean
        })
        let newOpeningHours = [ ...this.state.openingHours ]
        let selectedDay = event.target.name
        selectedDay = selectedDay.replace(/Open/,"")
        if(selectedDay == "publicHoliday"){
            selectedDay = "public Holiday"
        }
        selectedDay = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)
        let newHours = newOpeningHours.find(f => f.day == selectedDay)
        newHours.opened = transBoolean
        this.setState(newOpeningHours)
        this.props.fillOpeningHours(this.state.openingHours)
    }

    checkVal = (event) => {
        console.log(event)
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
                                name={day.value}
                                placeholder="11:00 am - 09:00 pm" 
                                onChange={this.hoursEntry}/>
                            <label>Are you sure about the time?</label>
                            <input type="radio" name={day.value + "Unsure"} 
                                value="yes" onChange={this.unsureEntry}
                                checked={this.state[day.value + "Unsure"] 
                                                                === true }/>
                            <label>Yes</label>
                            <input type="radio" name={day.value + "Unsure"} 
                                value="no" onChange={this.unsureEntry}
                                checked={this.state[day.value + "Unsure"] 
                                                                === false }/>
                            <label>No</label>
                            <br/>
                            <label>Is the shop opened on this day?</label>
                            <input type="radio" name={day.value + "Open"}
                                value="yes" onChange={this.openedEntry}
                                checked={this.state[day.value + "Open"] 
                                                                === true }/>
                            <label>Yes</label>
                            <input type="radio" name={day.value + "Open"}
                                value="no" onChange={this.openedEntry}
                                checked={this.state[day.value + "Open"] 
                                                                === false }/>
                            <label>No</label>
                        </React.Fragment>
                    )
                }

            </React.Fragment>
        )
    }
}