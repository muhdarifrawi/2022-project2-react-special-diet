import React from "react";
import "../css/ConPage.css"

export default class ConPage1 extends React.Component {
    state = {
        name: ""
    }

    nameEntry = (event) => {
        this.setState({
            name: event.target.value
        })
        this.props.fillSubmittedBy(event.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <h1>How should we call you?</h1>
                <label>Let us know who you are :)</label>
                <input type="text" className="nameInput"
                    value={this.state.name}
                    onChange={this.nameEntry} />
            </React.Fragment>
        )
    }
}
