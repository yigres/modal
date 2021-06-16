import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

// BEGIN (write your solution here)
const Remove = (props) => {
  const { show, onHide, tasks, setTasks, id } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
    onHide();
  };
  // console.log(show);
  return (
    <Modal show={show} onHide={onHide}>
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
// END
