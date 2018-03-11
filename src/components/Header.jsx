import React, { Component } from "react"

class Header extends Component  {
    render(){
        return(
            <header>
                <h1>Music@</h1>
                <div onClick={() => window.location = "/"} id="header-signout">
                    <i id="profile-icon" className="fas fa-user"></i>
                    <span>Log Out</span>
                </div>
              </header>
        )
    }
}

export default Header