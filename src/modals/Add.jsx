import React, { useEffect, useRef } from 'react';
// import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Add = (props) => {
  const { show, onHide, tasks, setTasks } = props;

  const textInput = useRef();

  useEffect(() => {
    // console.log('useEffect() done!');
    if (show) textInput.current.focus();
  });

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values) => {
      // console.log(tasks, values.body);
      // });
      if (values.body) setTasks([...tasks, values.body]);
      values.body = '';
      onHide();
    },
  });

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
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

export default Add;
