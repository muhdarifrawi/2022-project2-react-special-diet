import React from "react";
import ConPage1 from "./ConPage1"
import ConPage2 from "./ConPage2"

export default class Contribute extends React.Component {
    state = {
        conPage: 1
    }

    backConPage=()=>{
        console.log("test ere: ", this.state.conPage)
        if(this.state.conPage>1){
            this.setState({
                conPage: this.state.conPage - 1
            })
        }
    }
    frontConPage=()=>{
        if(this.state.conPage<=3){
            this.setState({
                conPage: this.state.conPage + 1
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Contribute</h1>
                    {this.state.conPage === 1 ? <ConPage1 /> : ""}
                    {this.state.conPage === 2 ? <ConPage2 /> : ""}
                    <button className="btn btn-light"
                        onClick={this.backConPage}>Previous</button>
                    <button className="btn btn-light"
                        onClick={this.frontConPage}>Next</button>
                </div>
            </React.Fragment>
        )
    }
}