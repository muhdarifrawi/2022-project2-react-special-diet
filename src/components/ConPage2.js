import React from "react";
import "../css/ConPage.css"

export default class ConPage2 extends React.Component {
    state = {
        allStallType:[
            {
                display: "Cafe",
                value:"cafe"
            },
            {
                display: "Fast Food",
                value:"fast-food"
            },
            {
                display: "Hawker",
                value:"hawker"
            },
            {
                display: "Restaurant",
                value:"restaurant"
            },
            {
                display: "Others",
                value:"others"
            },
        ],
        stallName:"",
        stallType:"cafe"
    }

    stallNameEntry = (event) => {
        this.setState({
            stallName:event.target.value
        })
        this.props.fillStallName(event.target.value)
    }

    stallTypeEntry = (event) => {
        this.setState({
            stallType:event.target.value
        })
        this.props.fillStallType(event.target.value)
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Tell us about the stall</h1>
                <label>
                    What's the name of the stall you went to?
                </label>
                <input type="text" className="nameInput" onChange={this.stallNameEntry}/>
                <label>
                    What kind of stall was it?
                </label>
                <select onChange={this.stallTypeEntry}>
                    {this.state.allStallType.map(st=>
                    <option value={st.value} key={st.value}>
                        {st.display}
                    </option>
                    )}
                </select>
            </React.Fragment>
        )
    }
}