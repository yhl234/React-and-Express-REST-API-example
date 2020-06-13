import React from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const OrderCreate = () => (
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  <div>
    <Formik
      initialValues={{
        email: '',
        name: '',
        phone: '',
        date: '',
        time: '',
        numOfPeople: '',
      }}
      validationSchema={OrderSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder=" Name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <Field name="phone" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="date" type="date" />
          {errors.date && touched.date ? <div>{errors.date}</div> : null}
          <Field name="time" type="time" placeholder=" Name" />
          {errors.time && touched.time ? <div>{errors.time}</div> : null}
          <Field
            name="numOfPeople"
            type="number"
            min="1"
            placeholder=" Number of People"
          />
          {errors.numOfPeople && touched.numOfPeople ? (
            <div>{errors.numOfPeople}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default OrderCreate;
