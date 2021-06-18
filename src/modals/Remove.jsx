import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

const Remove = (props) => {
  const {
    handleClose,
    setTasks,
    id,
    task
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((draft) => {
      delete draft[id];
    });
    handleClose();
  };
  const text = `Do you want to remove: ${task}`;

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          {text}
        </p>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <input className="btn btn-danger" type="submit" value="remove" />
          </FormGroup>
        </form>
      </Modal.Body>

    </Modal>
  );
};

export default Remove;
