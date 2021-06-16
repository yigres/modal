import React from 'react';
import { FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Remove = (props) => {
  const { task, removeTask, onSubmit } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    removeTask();
    onSubmit();
  };
  const confirm = `Are you sure that you want to remove "${task}"?`;
  return (
    <form onSubmit={handleSubmit}>
      <p>
        {confirm}
      </p>
      <FormGroup>
        <input className="btn btn-danger" type="submit" value="Remove" />
      </FormGroup>
    </form>
  );
};

Remove.propTypes = {
  task: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Remove;
