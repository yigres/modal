import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Rename = (props) => {
  const {
    handleClose,
    setTasks,
    id,
    task,
  } = props;

  const textInput = useRef();

  const formik = useFormik({
    initialValues: {
      body: task,
    },
    onSubmit: (values) => {
      if (values.body) {
        setTasks((draft) => {
          draft[id] = values.body;
        });
      }
      handleClose();
    },
  });

  useEffect(() => {
    textInput.current.focus();
    textInput.current.select();
  }, []);

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl data-testid="input-body" name="body" required ref={textInput} onChange={formik.handleChange} value={formik.values.body} />
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="submit" />
        </form>
      </Modal.Body>

    </Modal>
  );
};

export default Rename;
