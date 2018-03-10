import React, { Component } from "react"

class Splash extends Component {
    render(){
        return(
            <div id="splash-body">
                <h1 id="splash-header">Music@</h1>
                <img id="splash-logo" src="/assets/music@-icon.png" alt="icon"/>
                <button
                    onClick={() => window.location = "http://localhost:8888/login"/*"https://blooming-gorge-11355.herokuapp.com/login"*/}
                    id="splash-button">
                    Sign In With Spotify
                </button>
            </div>
        )
    }
}

export default Splash
