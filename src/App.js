import React from "react";
import './App.css';
import Stalls from "./components/Stalls";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import AboutUs from "./components/AboutUs";

class App extends React.Component {
  state = {
    page: "contribute"
  }


  changePage =(event)=>{
    console.log(event.target.innerHTML.toLowerCase())
    this.setState({
      page: event.target.innerHTML.toLowerCase()
    })
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="nav-link" value="home" 
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                  onClick={this.changePage}>Home</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" value="stalls" 
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                  onClick={this.changePage}>Stalls</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" 
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                  onClick={this.changePage}>Contribute</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" 
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                  onClick={this.changePage}>About Us</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.page === "home" ? <Home /> : ""}
        {this.state.page === "stalls" ? <Stalls /> : ""}
        {this.state.page === "contribute" ? <Contribute /> : ""}
        {this.state.page === "about us" ? <AboutUs /> : ""}
      </React.Fragment>
    );
  }
}

export default App;
