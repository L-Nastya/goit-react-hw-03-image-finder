import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay  onClick={this.handleBackdropClick}>
        <ModalText>{this.props.children}</ModalText>
      </Overlay>,
      modalRoot,
    );
  }
}

const Overlay = styled.div`
      position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalText = styled.div`
      max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  color: white;
`;

Modal.propTypes = {
    children: PropTypes.node,
}