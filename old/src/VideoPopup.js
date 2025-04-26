import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const VideoPopup = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Full Adder Demo Video"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '70%'
                }
            }}
        >
            <h2>Full Adder Demo</h2>
            <video width="100%" height="auto" controls>
                <source src="/path/to/Basys3_FullAdder_Demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default VideoPopup;