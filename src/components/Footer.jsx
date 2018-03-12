import React, { Component } from "react"

class Footer extends Component {
    render(){
        return(
            <footer>
                <small className="footer-link" onClick={() => window.location = "https://seth-caparelli.com"}>&copy; Seth Caparelli 2018</small>
                <h4 className="footer-link" onClick={() => window.location = "https://cocktail.surge.sh"}>Cocktail=></h4>
            </footer>
        )
    }
}

export default Footer
