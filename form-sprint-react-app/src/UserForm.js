import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function UserForm({ errors, touched, status }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (status) {
      setUsers([...users, status])
    }
  }, [status])
  
  return (
    <div className="user-form">
      <h1>USER FORM</h1>
      <Form>
        {touched.name && errors.name && <p>{errors.name}</p> }
        <Field type="text" name="name" placeholder="Name"/>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password"/>
        
        <button type="submit">Submit</button>
      </Form>

      {users.map(user => {
        return (
          <div className="cards">
            <p>NAME: {user.name}</p>
          </div>
        )
      })}

    </div>
  )
}

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || '',
      password: values.password || ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(1)
      .required("Name is required"),
    password: Yup.string()
      .min(1, "Password must be 1 characters or longer")
      .required("Password is required")
  }),
  
  handleSubmit(values, { setStatus }) {
    // console.log(values);
    axios
      .post("", values)
      .then(response => {
        // console.log("RESPONSE", response.data)
        setStatus(response.data)
      })
      .catch(error => {
        console.log("ERROR:", error)
      })
  }
})(UserForm)

export default FormikUserForm;