import React from "react";
import "../css/ConPage.css"

export default class ConPage4 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Let us know what food does it serve!
                </h1>
                <label>The type of food</label>
                <input type="checkbox" />
                <label>Halal</label>
                <input type="checkbox" />
                <label>Muslim Owned</label>
                <input type="checkbox"/>
                <label>Vegan</label>
                <input type="checkbox"/>
                <label>Vegetarian</label>
                <input type="checkbox"/>
                <label>Others</label>
                <label>How about the cuisine?</label>
                <input type="text" className="nameInput" />
                <label>
                    Give us a few from the menu. Place a comma after every food.
                </label>
                <textarea className="nameInput" placeholder="nasi lemak, kway teow, onigiri" />
                <label>What was the most expensive price?</label>
                <input type="text" placeholder="20.00" className="nameInput"/>
                <label>What was the cheapest price?</label>
                <input type="text" placeholder="1.00" className="nameInput"/>
            </React.Fragment>
        )
    }
}