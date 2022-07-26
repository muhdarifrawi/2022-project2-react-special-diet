import React from "react";
import "../css/ConPage.css"

export default class ConPage4 extends React.Component {
    state = {
        allFoodType:[
            {
                display:"Gluten Free",
                value:"gluten-free"
            },
            {
                display:"Halal Certified",
                value:"halal-certified"
            },
            {
                display:"Lactose Free",
                value:"lactose-free"
            },
            {
                display:"Muslim Owned",
                value:"muslim-owned"
            },
            {
                display:"Vegetarian",
                value:"vegetarian"
            },
            {
                display:"Vegan",
                value:"vegan"
            },
            {
                display:"Others",
                value:"others"
            }
        ],
        foodType:[],
        cuisine:"",
        menuDisplay:"",
        menu:[],
        priceRange:["",""]

    }

    foodTypeEntry = (event) => {
        if (this.state.foodType.includes(event.target.value)) {
            let indexToRemove = this.state.foodType.indexOf(event.target.value);
            let cloned = [
                ...this.state.foodType.slice(0, indexToRemove),
                ...this.state.foodType.slice(indexToRemove + 1)
            ]
            this.setState({
                'foodType': cloned
            })
        } 
        else {
            this.setState({
                'foodType': [...this.state.foodType, event.target.value]
            })

        }
    }

    menuEntry = (event) => {
        let menuData = event.target.value
        menuData = menuData.replace(/\s+/g,"")
        if(menuData.slice(-1) == ","){
            menuData = menuData.slice(0, menuData.length - 1)
        }
        this.setState({
            menuDisplay:event.target.value,
            menu:menuData.split(",")
        })
    }

    priceEntry = (event) =>{
        let price = event.target.value
        if(isNaN(price)){
            price = 0
        }
        else{
            price = price.replace(/[.,\s]/g,"")
            price = parseInt(price)
        }
        if(event.target.name == "maxPrice"){
            this.setState({
                priceRange:[this.state.priceRange[0],price]
            })
        }
        if(event.target.name == "minPrice"){
            this.setState({
                priceRange:[price,this.state.priceRange[1]]
            })
        }
        
    }

    cuisineEntry = (event) => {
        this.setState({
            cuisine:event.target.value
        })
        // this.props.fillCuisine(event.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    Let us know what food does it serve!
                </h1>
                <label>The type of food</label>
                <br/>
                {this.state.allFoodType.map(fd=>
                    <React.Fragment>
                        <input type="checkbox" value={fd.value} key={fd.value} 
                            onChange={this.foodTypeEntry}
                            checked={this.state.foodType.includes(fd.value)}/>
                        <label key={fd.value + "-label"}>{fd.display}</label>
                    </React.Fragment>
                )}
                <br/>
                <label>How about the cuisine?</label>
                <input type="text" className="nameInput" onChange={this.cuisineEntry}
                    value={this.state.cuisine}/>
                <label>
                    Give us a few from the menu. Place a comma after every food.
                </label>
                <textarea className="nameInput" placeholder="nasi lemak, kway teow, onigiri" 
                    onChange={this.menuEntry} value={this.state.menuDisplay}/>
                <label>What was the most expensive price?</label>
                <input type="text" placeholder="20.00" className="nameInput" name="maxPrice"
                    onChange={this.priceEntry} value={isNaN(this.state.priceRange[1]) ? 0 : this.state.priceRange[1]}/>
                <label>What was the cheapest price?</label>
                <input type="text" placeholder="1.00" className="nameInput" name="minPrice"
                    onChange={this.priceEntry} value={isNaN(this.state.priceRange[0]) ? 0 : this.state.priceRange[0]}/>
            </React.Fragment>
        )
    }
}