import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
  const { title, remove, rename } = props;
  return (
    <div className="task">
      <span className="mr-3">{title}</span>
      <button
        type="button"
        className="border-0 btn-link mr-3 p-0"
        data-testid="item-rename"
        onClick={rename}
      >
        rename
      </button>
      <button
        type="button"
        className="border-0 btn-link p-0"
        data-testid="item-remove"
        onClick={remove}
      >
        remove
      </button>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  rename: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Task;
