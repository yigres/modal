import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Rename from '../components/Rename';

const RenameModal = (props) => {
  const {
    show,
    onHide,
    task,
    renameTask,
  } = props;
  return (
    <Modal title="Rename task" show={show} onHide={onHide}>
      <Rename task={task} renameTask={renameTask} onSubmit={onHide} />
    </Modal>
  );
};

RenameModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  renameTask: PropTypes.func.isRequired,
};

export default RenameModal;
