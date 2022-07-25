import React from "react";
import "../css/ConPage.css"

export default class ConPage4 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Just one last thing
                </h1>
                <label>We'd like to know the time</label>
                <h2>Monday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="monday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="monday-unsure"/>
                <label>No</label>

                <h2>Tuesday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="tuesday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="tuesday-unsure"/>
                <label>No</label>
                
                <h2>Wednesday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="wednesday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="wednesday-unsure"/>
                <label>No</label>

                <h2>Thursday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="thursday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="thursday-unsure"/>
                <label>No</label>

                <h2>Friday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="friday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="friday-unsure"/>
                <label>No</label>
                
                <h2>Saturday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="saturday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="saturday-unsure"/>
                <label>No</label>

                <h2>Sunday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="sunday-unsure"/>
                <label>Yes</label>
                <input type="radio" name="sunday-unsure"/>
                <label>No</label>
                
                <h2>Public Holiday</h2>
                <label>Opening Hours</label>
                <input type="text" className="nameInput" 
                placeholder="11:00 am - 09:00 pm"/>
                <label>Are you sure about the time?</label>
                <input type="radio" name="ph-unsure"/>
                <label>Yes</label>
                <input type="radio" name="ph-unsure"/>
                <label>No</label>
            </React.Fragment>
        )
    }
}