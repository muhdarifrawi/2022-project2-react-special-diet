import React from "react";
import "../css/ConPage.css"

export default class ConPage4 extends React.Component {
    state = {
        image:""
    }

    imageEntry = (event) => {
        this.setState({
            image: event.target.value
        })
        this.props.fillImage(event.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    Some extra stuff if you have
                </h1>
                <label>A picture perhaps?</label>
                <br/>
                <label>Give us a link from an image hosting site!</label>
                <input type="text" className="nameInput"
                    value={this.state.image}
                    onChange={this.imageEntry} />
            </React.Fragment>
        )
    }
}