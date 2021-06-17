import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Add from '../components/Add';

const AddModal = (props) => {
  const { show, onHide, addTask } = props;
  return (
    <Modal title="Add task" show={show} onHide={onHide}>
      <Add addTask={addTask} onSubmit={onHide} />
    </Modal>
  );
};

AddModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default AddModal;
