import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

const Remove = (props) => {
  const { onHide, setTasks, id } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((draft) => {
      delete draft[id];
    });
    onHide();
  };

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
