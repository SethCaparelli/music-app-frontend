import React from "react"
import Modal from "react-responsive-modal"


export default class PopUp extends React.Component {
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
  
    render() {
      const { openFirstModal, openSecondModal } = this.state;
      const littleLorem = (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
          risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
          risus, sed porttitor quam.
        </p>
      );
      return (
        <div className="example">
            <img src="/assets/music@-icon.png" alt="icon" id="icon" onClick={this.onOpenFirstModal}/>
            {/* <button className="btn btn-action" onClick={this.onOpenFirstModal}>
                Open
            </button>{' '} */}
            {/* <a
                href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/multiple.js"
                target="_blank"
            >
                See source code
            </a> */}
            <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
                <p>First modal</p>
                {littleLorem}
                <button className="btn btn-action" onClick={this.onOpenSecondModal}>
                Open second modal
                </button>
            </Modal>
            <Modal open={openSecondModal} onClose={this.onCloseSecondModal} little>
                <p>Second modal</p>
                {littleLorem}
            </Modal>
            </div>
      );
    }
  }
