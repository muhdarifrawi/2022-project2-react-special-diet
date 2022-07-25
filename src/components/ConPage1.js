import React from "react";
import "../css/ConPage.css"

export default class ConPage1 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>How should we call you?</h1>
                <label>Let us know who you are :)</label>
                <input type="text" className="nameInput"/>
            </React.Fragment>
        )
    }
}