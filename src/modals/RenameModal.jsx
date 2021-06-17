import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Rename from '../components/Rename';

const RenameModal = (props) => {
  const { onHide, task, renameTask } = props;
  return (
    <Modal title="Rename task" show={!!task} onHide={onHide}>
      <Rename task={task} renameTask={renameTask} onSubmit={onHide} />
    </Modal>
  );
};

RenameModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  renameTask: PropTypes.func.isRequired,
};

export default RenameModal;
