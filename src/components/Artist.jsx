import React, { Component } from 'react';

class Artist extends Component {

    setSong = () => {
        const song = this.props.userArtists.uri
        this.props.playSong(song)
    }

    setTourInfo = () => {
        const artist = this.props.userArtists.name
        this.props.getTourInfo(artist)
    }

    render() {
        return (
            <div className="profile">
                <img id="icon" src="/assets/music@-icon.png" alt="icon" onClick={(e) => {this.setTourInfo(e)}} />
                <img id="artist-image" onClick={(e) => {this.setSong(e)}} src={this.props.userArtists.images[1].url} alt="artist"/>
                <h2 id="artist-name">{this.props.userArtists.name}</h2>
            </div>
        );
    }
}

export default Artist;