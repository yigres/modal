import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal } from 'react-bootstrap';

const Modal = (props) => {
  const {
    title,
    show,
    onHide,
    children,
  } = props;

  return (
    <BootstrapModal show={show} onHide={onHide}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {children}
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Modal.defaultProps = {
  title: 'Modal',
};

export default Modal;
