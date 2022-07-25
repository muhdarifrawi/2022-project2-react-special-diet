import React from "react";
import ConPage1 from "./ConPage1"
import ConPage2 from "./ConPage2"
import ConPage3 from "./ConPage3"
import ConPage4 from "./ConPage4"
import ConPage5 from "./ConPage5"
import ConPage6 from "./ConPage6"

export default class Contribute extends React.Component {
    state = {
        conPage: 1
    }

    backConPage = () => {
        console.log("test ere: ", this.state.conPage)
        if (this.state.conPage > 1) {
            this.setState({
                conPage: this.state.conPage - 1
            })
        }
    }
    frontConPage = () => {
        if (this.state.conPage <= 6) {
            this.setState({
                conPage: this.state.conPage + 1
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.conPage === 1 ? <ConPage1 /> : ""}
                    {this.state.conPage === 2 ? <ConPage2 /> : ""}
                    {this.state.conPage === 3 ? <ConPage3 /> : ""}
                    {this.state.conPage === 4 ? <ConPage4 /> : ""}
                    {this.state.conPage === 5 ? <ConPage5 /> : ""}
                    {this.state.conPage === 6 ? <ConPage6 /> : ""}
                    <div className="m-3">
                        <button className="btn btn-light"
                            onClick={this.backConPage}>Previous</button>
                        <button className="btn btn-light"
                            onClick={this.frontConPage}>Next</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}