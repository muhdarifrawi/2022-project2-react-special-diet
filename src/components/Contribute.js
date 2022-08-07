import React from "react";
import axios from "axios"
import ConPage1 from "./ConPage1"
import ConPage2 from "./ConPage2"
import ConPage3 from "./ConPage3"
import ConPage4 from "./ConPage4"
import ConPage5 from "./ConPage5"
import ConPage6 from "./ConPage6"
import ConPage7 from "./ConPage7"

export default class Contribute extends React.Component {
    state = {
        conPage: 6,
        error: false,
        data: {
            "dateSubmitted": "",
            "submittedBy": "",
            "stallName": "",
            "stallType": "cafe",
            "location":
            {
                "buildingName": "",
                "address": "",
                "stallNumber": ""
            },
            "foodType": [],
            "cuisine": "",
            "menu": [],
            "priceRange": [0, 0],
            "images": "",
            "openingHours": [
                {
                    "day": "Monday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Tuesday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Wednesday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Thursday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Friday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Saturday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Sunday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                },
                {
                    "day": "Public Holiday",
                    "opened": true,
                    "unsure": false,
                    "time": ""
                }
            ]
        },
        dataStatus: ""
    }

    async componentDidMount() {

    }

    backConPage = () => {
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

        if (this.state.conPage === 6) {
            console.log("sned", process.env.REACT_APP_DATABASE_URL)
            this.sendData()
        }
    }

    async sendData() {
        console.log(process.env.REACT_APP_DATABASE_URL + "/stalls", this.state.data)
        let pushData = await axios.post(
                process.env.REACT_APP_DATABASE_URL + "/stalls",
                this.state.data
                )
            .then(
                function (response) {
                    console.log("triggered")
                    console.log("triggered", response)
                    this.setState({
                        dataStatus: "test"
                    })
                }
            ).catch(
                function (error) {
                    console.log(error)
                }
            )
    }

    handleSubmittedBy = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.submittedBy = inputData
            return { data }
        })
    }

    handleStallName = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.stallName = inputData
            return { data }
        })
    }

    handleStallType = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.stallType = inputData
            return { data }
        })
    }

    handleBuildingName = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.location.buildingName = inputData
            return { data }
        })
    }

    handleAddress = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.location.address = inputData
            return { data }
        })
    }

    handleStallNumber = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.location.stallNumber = inputData
            return { data }
        })
    }

    handleFoodType = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.foodType = inputData
            return { data }
        })
    }

    handleMenu = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.menu = inputData
            return { data }
        })
    }

    handlePrice = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.priceRange = inputData
            return { data }
        })
    }

    handleCuisine = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.cuisine = inputData
            return { data }
        })
    }

    handleImage = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.images = inputData
            return { data }
        })
    }

    handleOpeningHours = (inputData) => {
        this.setState(prevState => {
            let data = { ...prevState.data }
            data.openingHours = inputData
            return { data }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.conPage === 1 ?
                        <ConPage1 fillSubmittedBy={this.handleSubmittedBy} />
                        : ""}
                    {this.state.conPage === 2 ?
                        <ConPage2
                            fillStallName={this.handleStallName}
                            fillStallType={this.handleStallType} /> : ""}
                    {this.state.conPage === 3 ?
                        <ConPage3
                            fillBuildingName={this.handleBuildingName}
                            fillAddress={this.handleAddress}
                            fillStallNumber={this.handleStallNumber} /> : ""}
                    {this.state.conPage === 4 ?
                        <ConPage4
                            fillFoodType={this.handleFoodType}
                            fillMenu={this.handleMenu}
                            fillPriceRange={this.handlePrice}
                            fillCuisine={this.handleCuisine} /> : ""}
                    {this.state.conPage === 5 ? <ConPage5
                        fillImage={this.handleImage} /> : ""}
                    {this.state.conPage === 6 ? <ConPage6
                        fillOpeningHours={this.handleOpeningHours} /> : ""}
                    {this.state.conPage === 7 ? <ConPage7 
                        dataStatus={this.handleStatus} /> : ""}
                    <div className="m-3 d-flex">
                        <button
                            className={"btn btn-light " + 
                                (this.state.conPage == 1 ? "d-none" : "")}
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