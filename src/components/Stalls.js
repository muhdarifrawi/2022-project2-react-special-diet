import React from "react";
import axios from "axios";

export default class Stalls extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get("http://localhost:3000/stalls")
            .then(res => {
                console.log(res)
                let response = res.data
                this.setState({
                    data: response
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <h1>Stalls</h1>
                    <div>
                        {this.state.data.map(d => {
                            return (
                                <div class="card m-3" style={{width: "18rem"}}>
                                    <div class="card-body">
                                        <h5 class="card-title">{d.stallName}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{d.stallType}</h6>
                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}