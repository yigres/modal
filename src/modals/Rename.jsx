import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Rename = (props) => {
  const { show, onHide, tasks, setTasks, id } = props;

  const textInput = useRef();

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values) => {
      if (values.body) {
        setTasks((draft) => {
          draft[id] = values.body;
        });
      }
      onHide();
    },
  });

  useEffect(() => {
    if (show) textInput.current.focus();
  });

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Rename</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FormControl data-testid="input-body" name="body" required="" ref={textInput} onChange={formik.handleChange} value={formik.values.body} />
            </FormGroup>
            <input className="btn btn-primary" type="submit" value="submit" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Rename;
