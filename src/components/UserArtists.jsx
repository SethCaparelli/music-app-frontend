import React, { Component } from 'react';

class UserArtists extends Component {
    render() {
        console.log(this.props.userArtists.images[2])
        return (
            <div>
                <h2>{this.props.userArtists.name}</h2>
                <button><img src={this.props.userArtists.images[1].url} alt="artist-photo"/></button>
                <button>Find Tour Info</button>
            </div>
        );
    }
}

export default UserArtists;