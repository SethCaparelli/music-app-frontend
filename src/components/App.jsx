import React, { Component } from 'react'
import queryString from "query-string"
import SpotifyPlayer from "react-spotify-player"
import Artist from "./Artist"
import Header from "./Header"
import Footer from "./Footer"
import Splash from "./Splash"
import SearchForm from './SearchForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userArtists: {
        artists: {
          items: []
        }
      },
      tourInfo: [],
      userData: {},
      songToPlay: null,
      popUp: false
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
        if(tourInfo) {
          this.setState({
            tourInfo
          })
        }
      })
      .catch(error => console.log(error))
  }

  searchSpot = (searchItem) => {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token

    fetch(`https://api.spotify.com/v1/search?q=${searchItem}&type=artist`, {
      headers: {"Authorization": "Bearer " + accessToken}
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({
        userArtists: data
      })
    })
  }

  playSong = (song) => {
    this.setState({
      songToPlay: song
    })
  }

  render() {
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
                <div id="user-header">
                  <h2>{this.state.userData.display_name}'s Artists</h2>
                </div>
                <div className={this.state.userArtists.artists.items.length > 4 ? "artist-body" : "artist-body-small"}>
                  {this.state.userArtists.artists.items.length > 1
                    ? this.state.userArtists.artists.items.map(item =>
                      {return <Artist
                        tourInfo={this.state.tourInfo}
                        getTourInfo={this.getTourInfo}
                        playSong={this.playSong}
                        key={item.id}
                        userArtists={item} />
                      })
                    : <h3 id="search-again">No Artists, Please Search Again</h3>
                  }
                </div>
                <SearchForm searchSpot={this.searchSpot}/>
                <SpotifyPlayer
                    id="spotify-player"
                    uri={this.state.songToPlay}
                    size={size}
                    view={view}
                    theme={theme}
                />
                <div id="search-container">
                  <Footer />
                </div>
            </div>
          : <Splash />}

      </div>
    );
  }
}

export default App
