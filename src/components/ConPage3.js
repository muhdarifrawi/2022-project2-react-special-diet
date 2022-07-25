import React from "react";
import "../css/ConPage.css"

export default class ConPage3 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>We would like to know where it was</h1>
                <label>
                    If it was in a building, let us know the name of the building.
                    You can leave this blank if you don't know the name. :)
                </label>
                <input type="text" className="nameInput"/>

                <label>
                    The address of the stall please!
                </label>
                <textarea type="text" className="nameInput"/>

                <label>
                    And the stall number. Again, leave it blank if you don't know.
                </label>
                <input type="text" className="nameInput"/>
                
            </React.Fragment>
        )
    }
}