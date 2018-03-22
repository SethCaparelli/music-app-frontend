import React, { Component } from 'react'
import Event from "./Event"
import Modal from "react-responsive-modal"
// import TourUnavail from './TourUnavail'

class Artist extends Component {
    state = {
        openFirstModal: false,
        openSecondModal: false,
        iconHidden: true,
      }

    showIcon = (event) => {
        event.preventDefault()
        this.setState({
            iconHidden: false
        })
    }

    hideIcon = (event) => {
        event.preventDefault()
        this.setState({
            iconHidden: true
        })
    }

    onOpenFirstModal = () => {
        this.setState({
            openFirstModal: true,
            iconHidden: true
        })
    };

    onCloseFirstModal = () => {
        this.setState({ openFirstModal: false });
    };

    onOpenSecondModal = () => {
        this.setState({ openSecondModal: true });
    };

    onCloseSecondModal = () => {
        this.setState({ openSecondModal: false });
    };

    setSong = () => {
        const song = this.props.userArtists.uri
        this.props.playSong(song)
    }

    setTourInfo = (event) => {
        const artist = this.props.userArtists.name
        this.props.getTourInfo(artist)
    }

    render() {
        const { openFirstModal, openSecondModal } = this.state;
        return (
            <div onMouseEnter={(e) => this.showIcon(e)} onMouseLeave={(e) => this.hideIcon(e)}>
                <div className={this.state.iconHidden ? "tour-icon-hidden" : "tour-icon-show"} onClick={(e) => this.setTourInfo(e)}>
                    <div id="get-tour-container">
                        <small>Tour Info</small>
                        <img id="get-tour-icon" src="/assets/music@-icon.png" alt="icon" onClick={this.onOpenFirstModal}/>
                    </div>
                    <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
                        <div id="tour-container">
                            <div id="event-header">
                                <h2 id={this.props.userArtists.name.length > 10 ? "event-name-long" : "event-name"}>{this.props.userArtists.name}</h2>
                            </div>
                            {this.props.tourInfo.length < 1
                                ? <div id="loading">
                                    <div class="loader">Loading...</div>
                                    <p>loading..</p>
                                  </div>
                                : this.props.tourInfo.map(event => <Event key={event.id} userArtists={this.props.userArtists} tourInfo={event} />)
                            }
                        </div>
                        {/* <button className="btn btn-action" onClick={this.onOpenSecondModal}>
                        Open second modal
                    </button> */}
                    </Modal>
                    <Modal open={openSecondModal} onClose={this.onCloseSecondModal}>
                    </Modal>
                </div>
                <div className="profile" >
                    <div id="artist-image-container" onClick={(e) => {this.setSong(e)}}>
                        <i id="play-icon" className="fa fa-play-circle" aria-hidden="true"></i>
                        {this.props.userArtists.images[0] ? <img id="artist-image" src={this.props.userArtists.images[1].url} alt="artist"/> : <i id="artist-image" class="fa fa-camera" aria-hidden="true"></i>}
                    </div>
                    <div id="artist-name-container">
                        <h3 onClick={(e) => {this.setTourInfo(e)}} id={this.props.userArtists.name.length < 400 ? "artist-name" : "artist-name-small"}>{this.props.userArtists.name}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Artist
