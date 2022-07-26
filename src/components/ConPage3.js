import React from "react";
import "../css/ConPage.css"

export default class ConPage3 extends React.Component {
    state = {
        buildingName:"",
        address:"",
        stallNumber:""
    }

    buildingNameEntry = (event) => {
        this.setState({
            buildingName: event.target.value
        })
        this.props.fillBuildingName(event.target.value)
    }

    addressEntry = (event) => {
        this.setState({
            address: event.target.value
        })
        this.props.fillAddress(event.target.value)
    }

    stallNumberEntry = (event) => {
        this.setState({
            stallNumber: event.target.value
        })
        this.props.fillStallNumber(event.target.value)
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>We would like to know where it was</h1>
                <label>
                    If it was in a building, let us know the name of the building.
                    You can leave this blank if you don't know the name. :)
                </label>
                <input type="text" className="nameInput" onChange={this.buildingNameEntry}/>

                <label>
                    The address of the stall please!
                </label>
                <textarea type="text" className="nameInput" onChange={this.addressEntry}/>

                <label>
                    And the stall number. Again, leave it blank if you don't know.
                </label>
                <input type="text" className="nameInput" onChange={this.stallNumberEntry}/>
                
            </React.Fragment>
        )
    }
}