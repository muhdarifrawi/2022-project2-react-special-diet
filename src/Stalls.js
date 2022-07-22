import React from "react";
import axios from "axios";

export default class Stalls extends React.Component{
    state = {
        data: []
    }
    
    componentDidMount(){
        axios.get("http://localhost:3000/stalls")
        .then(res =>{
            console.log(res)
            let response = res.data
            this.setState({
                data:response
            })
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <h1>Stalls</h1>
                    <ul>
                        {this.state.data.map(d =>{
                            return(
                                <li>{d.submittedBy}</li>
                            )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}