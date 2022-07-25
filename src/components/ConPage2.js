import React from "react";
import "../css/ConPage.css"

export default class ConPage2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Tell us about the stall</h1>
                <label>
                    What's the name of the stall you went to?
                </label>
                <input type="text" className="nameInput"/>
                <label>
                    What kind of stall was it?
                </label>
                <select>
                    <option>Hawker</option>
                    <option>Restaurant</option>
                    <option>Cafe</option>
                    <option>Fast Food</option>
                    <option>Others</option>
                </select>
            </React.Fragment>
        )
    }
}