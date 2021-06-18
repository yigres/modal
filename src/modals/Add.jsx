import React, { useEffect, useRef } from 'react';
// import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Add = (props) => {
  const { handleClose, setTasks } = props;

  const textInput = useRef();

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values) => {
      setTasks((draft) => {
        draft.push(values.body);
      });
      handleClose();
    },
  });

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <>
      <Modal show onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
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
    </>
  );
};

export default Add;
