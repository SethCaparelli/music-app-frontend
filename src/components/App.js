import React, { Component } from 'react'
import queryString from "query-string"
import SpotifyPlayer from "react-spotify-player"
// import userArtists from "./UserArtists"
import '../App.css'
import UserArtists from './UserArtists';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userData: {}
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token

    fetch("https://api.spotify.com/v1/me", {
      headers: {"Authorization": "Bearer " + accessToken}
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        userData: data
      })
    })

    fetch("https://api.spotify.com/v1/me/following?type=artist", {
      headers: {"Authorization": "Bearer " + accessToken}
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        userArtists: data
      })
    })
  }

  render() {
    const size = {
      width: '100%',
      height: 300,
    };
    const view = 'list'
    const theme = 'black'
    return (
      <div className="App">
        {this.state.userData.email
          ? <div>
              <h1>Where the Music.at {this.state.userData.display_name}?</h1>
              {/* <UserArtists details={this.state.UserArtists} /> */}
              <SpotifyPlayer
                  uri="spotify:artist:0334oJHhRSKJRHKpE9i62h"
                  size={size}
                  view={view}
                  theme={theme}
              />
            </div>
          : <button onClick={() => window.location = "https://blooming-gorge-11355.herokuapp.com/login"} id="splash-button">Sign In With Spotify</button>}

      </div>
    );
  }
}

export default App
