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
      <h1>REGISTRATION FORM</h1>
      <Form>
        {touched.username && errors.username && <p>{errors.username}</p> }
        <Field type="text" name="username" placeholder="Name"/>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password"/>
        
        <button type="submit">Register</button>
      </Form>

      {/* {users.map(user => {
        return (
          <div className="cards">
            <p>NAME: {user.username}</p>
          </div>
        )
      })} */}

    </div>
  )
}

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || '',
      password: values.password || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(1)
      .required("Name is required"),
    password: Yup.string()
      .min(1, "Password must be 1 characters or longer")
      .required("Password is required")
  }),
  
  handleSubmit(values, { setStatus }) {
    // console.log(values);
    axios
      .post("http://localhost:7000/api/register", values)
      .then(response => {
        console.log("RESPONSE", response.data)
        setStatus(response.data)
      })
      .catch(error => {
        console.log("ERROR:", error)
      })
  }
})(UserForm)

export default FormikUserForm;