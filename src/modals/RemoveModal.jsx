import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Remove from '../components/Remove';

const RemoveModal = (props) => {
  const {
    show,
    onHide,
    task,
    removeTask,
  } = props;
  return (
    <Modal title="Remove task" show={show} onHide={onHide}>
      <Remove task={task} removeTask={removeTask} onSubmit={onHide} />
    </Modal>
  );
};

RemoveModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default RemoveModal;
