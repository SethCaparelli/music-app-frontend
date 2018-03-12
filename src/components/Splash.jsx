import React, { Component } from "react"

class Splash extends Component {
    render(){
        return(
            <div id="splash-body">
                <img id="splash-logo" src="/assets/music@-icon.png" alt="icon"/>
                <h1 id="splash-header">Music@</h1>
                <button
                    onClick={() => window.location = "http://localhost:8888/login"/*"https://blooming-gorge-11355.herokuapp.com/login"*/}
                    id="splash-button">
                    <b>Sign In With Spotify</b>
                </button>
            </div>
        )
    }
}

export default Splash
