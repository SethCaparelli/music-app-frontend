import React, { Component } from 'react'
import Event from "./Event"
import Modal from "react-responsive-modal"
import TourUnavail from './TourUnavail'

class Artist extends Component {
    state = {
        openFirstModal: false,
        openSecondModal: false,
      };

      onOpenFirstModal = () => {
        this.setState({ openFirstModal: true });
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
            <div className="profile" >
                <div className="pop-up-icon" onClick={(e) => this.setTourInfo(e)}>
                    <div id="get-tour-container">
                        <small>Get Tour Info</small>
                        <img src="/assets/music@-icon-small.png" alt="icon" onClick={this.onOpenFirstModal}/>
                    </div>
                    <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
                        <div id="tour-container">
                            {this.props.tourInfo.length < 1
                                ? <TourUnavail />
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
                <img id="artist-image" onClick={(e) => {this.setSong(e)}} src={this.props.userArtists.images[1].url} alt="artist"/>
                <h2 onClick={(e) => {this.setTourInfo(e)}} id="artist-name">{this.props.userArtists.name}</h2>
            </div>
        );
    }
}

export default Artist
