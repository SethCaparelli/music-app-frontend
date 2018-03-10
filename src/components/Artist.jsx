import React, { Component } from 'react'
// import PopUp from "./PopUp"
import Modal from "react-responsive-modal"

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
        console.log(event)
        const artist = this.props.userArtists.name
        this.props.getTourInfo(artist)
    }

    render() {
        const { openFirstModal, openSecondModal } = this.state;
        return (
            <div className="profile" onClick={(e) => this.setTourInfo(e)}>
                <div className="pop-up-icon">
                    <img src="/assets/music@-icon-small.png" alt="icon" onClick={this.onOpenFirstModal}/>
                    <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
                        <div id="tour-info">
                            <p>First modal</p>
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
