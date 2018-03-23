import React, { Component } from "react"

class TourUnavail extends Component {
    render(){
        return(
            <div id="tour-unavail">
                <img id="not-touring-icon" src="/assets/not-touring-symbol.png" alt="not-touring"/>
                <h3>Sorry, This Artist Is Not Touring</h3>
            </div>
        )
    }
}

export default TourUnavail
