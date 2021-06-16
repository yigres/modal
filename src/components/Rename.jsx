import React, { useEffect, useRef } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const Rename = (props) => {
  const { task, renameTask, onSubmit } = props;

  const textInput = useRef();

  const formik = useFormik({
    initialValues: {
      body: task,
    },
    onSubmit: (values) => {
      if (!values.body) {
        return;
      }
      renameTask(values.body);
      onSubmit();
    },
  });

  useEffect(() => {
    textInput.current.focus();
  }, []);

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
      <input className="btn btn-primary" type="submit" value="Rename" />
    </form>
  );
};

Rename.propTypes = {
  task: PropTypes.string.isRequired,
  renameTask: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Rename;
