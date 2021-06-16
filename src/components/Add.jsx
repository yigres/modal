import React, { useEffect, useRef } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const Add = (props) => {
  const { addTask, onSubmit } = props;

  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values) => {
      if (!values.body) {
        return;
      }
      addTask(values.body);
      onSubmit();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <FormControl
          data-testid="input-body"
          name="body"
          required=""
          ref={textInput}
          onChange={formik.handleChange}
          value={formik.values.body}
        />
      </FormGroup>
      <input className="btn btn-primary" type="submit" value="Add" />
    </form>
  );
};

Add.propTypes = {
  addTask: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Add;
