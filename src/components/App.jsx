import React, { Component } from 'react'
import queryString from "query-string"
import SpotifyPlayer from "react-spotify-player"
import Artist from "./Artist"
import Header from "./Header"
import Splash from "./Splash"

class App extends Component {
  constructor() {
    super()
    this.state = {
      userArtists: {
        artists: {
          items: []
        }
      },
      userData: {},
      songToPlay: null
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
      if (data && data.artists && data.artists.items && data.artists.items.length > 0) {
        this.playSong(data.artists.items[0].uri)
      }
    })
    .catch(error => console.log(error))
  }

  getTourInfo = (artist) => {
    fetch(`https://rest.bandsintown.com/artists/${artist}/events?app_id=Music.at`, {mode: "cors"})
      .then(response => {
        return response.json()
      })
      .then(tourInfo => {
        this.setState({
          tourInfo
        })
      })
      .catch(error => console.log(error))
  }

  playSong = (song) => {
    this.setState({
      songToPlay: song
    })
  }

  render() {
    let artists = this.state.userArtists.artists.items
    const size = {
      width: "100%",
      height: 300,
    };
    const view = 'list'
    const theme = 'black'
    return (
      <div className="App">
        {this.state.userData.email
          ? <div id="main">
              <Header userData={this.state.userData} />
              <div>
                  <h2>Your Followed Artists</h2>
                <div className="body">
                  {artists.map(item => {return <Artist
                    getTourInfo={this.getTourInfo}
                    playSong={this.playSong}
                    key={item.id}
                    userArtists={item} />
                    })
                  }
                </div>
              </div>
                <SpotifyPlayer
                    id="spotify-player"
                    uri={this.state.songToPlay}
                    size={size}
                    view={view}
                    theme={theme}
                />
              <footer>
                <small>Copyright Seth Caparelli</small>
              </footer>
            </div>
          : <Splash />}

      </div>
    );
  }
}

export default App
