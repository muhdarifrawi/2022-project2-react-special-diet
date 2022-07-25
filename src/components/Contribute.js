import React from "react";
import ConPage1 from "./ConPage1"
import ConPage2 from "./ConPage2"
import ConPage3 from "./ConPage3"
import ConPage4 from "./ConPage4"
import ConPage5 from "./ConPage5"
import ConPage6 from "./ConPage6"
import ConPage7 from "./ConPage7"

export default class Contribute extends React.Component {
    state = {
        conPage: 1,
        error:false,
        data:{
            "dateSubmitted": "",
            "submittedBy": "",
            "stallName":"",
            "stallType":"",
            "location":
                {
                    "buildingName":"",
                    "address":"",
                    "stallNumber":""
                },
            "foodType":[],
            "cuisine":"",
            "menu":[],
            "priceRange":[0, 0],
            "images":"",
            "openingHours":[
                {
                    "day":"Monday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Tuesday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Wednesday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Thursday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Friday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Saturday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Sunday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                },
                {
                    "day":"Public Holiday",
                    "opened":true,
                    "unsure":false,
                    "time":""
                }
            ]
        }
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

    handleSubmittedBy = (inputData) =>{
        this.setState(prevState => {
            let data = {...prevState.data}
            data.submittedBy = inputData
            return {data}
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.conPage === 1 ? 
                    <ConPage1 fillSubmittedBy={this.handleSubmittedBy}/> : ""}
                    {this.state.conPage === 2 ? <ConPage2 /> : ""}
                    {this.state.conPage === 3 ? <ConPage3 /> : ""}
                    {this.state.conPage === 4 ? <ConPage4 /> : ""}
                    {this.state.conPage === 5 ? <ConPage5 /> : ""}
                    {this.state.conPage === 6 ? <ConPage6 /> : ""}
                    {this.state.conPage === 7 ? <ConPage7 /> : ""}
                    <div className="m-3 d-flex">
                        <button 
                        className={"btn btn-light " + (this.state.conPage == 1 ? "d-none" : "")}
                            onClick={this.backConPage}>Previous</button>
                        <button className="btn btn-light ms-auto"
                            onClick={this.frontConPage}>
                                {this.state.conPage === 7 ? "Done" : "Next"}
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}