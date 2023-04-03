import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import { Button, Input, Label } from './Form.styled';

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)) {
      error = 'Name must contain only letters, apostrophe, dash and spaces.';
    }
    return error;
  };

  const validateNumber = (value) => {
    let error;
    if (!value) {
      error = 'Phone number is required';
    } else if (
      !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value)
    ) {
      error = 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
    }
    return error;
  };

  const NameInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <Label>
        {label}
        <Input {...field} {...props} />
        {meta.touched && meta.error && <ErrorMessage name={props.name} component="div" />}
      </Label>
    );
  };

  const NumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <Label>
        {label}
        <Input {...field} {...props} />
        {meta.touched && meta.error && <ErrorMessage name={props.name} component="div" />}
      </Label>
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <NameInput
          label="Name"
          type="text"
          name="name"
          validate={validateName}
          placeholder="Enter name"
        />
        <NumberInput
          label="Number"
          type="tel"
          name="number"
          validate={validateNumber}
          placeholder="Enter phone number"
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};