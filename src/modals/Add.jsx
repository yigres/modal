import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const generateOnSubmit = ({ setItems, onHide }) => (values) => {
  const item = { id: _.uniqueId(), body: values.body };
  setItems((items) => {
    items.push(item);
  });
  onHide();
};

const Add = (props) => {
  const { onHide } = props;
  const f = useFormik({ onSubmit: generateOnSubmit(props), initialValues: { body: '' } });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={f.handleSubmit}>
          <FormGroup>
            <FormControl
              required
              ref={inputRef}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
              value={f.values.body}
              data-testid="input-body"
              name="body"
            />
          </FormGroup>
          <input type="submit" className="btn btn-primary" value="submit" />
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default Add;
