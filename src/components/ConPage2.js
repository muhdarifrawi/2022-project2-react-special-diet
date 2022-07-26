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
        stallType:""
    }
    
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