import React from 'react'
import './login.css'
import { useFormik } from 'formik';
import {useState } from 'react';

function Login() {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''

    },
    onSubmit:values => {
      
      
    }
  });
  return (
    <div className='background'>
      <div className='main-heading' >
        <h2>Registration</h2>      
      </div>
      
          <form className='form-div' onSubmit={formik.handleSubmit}>
            <div className='email-div'>
              <label className='lable-div' >Email</label>
              <input className='input-div'/>
            </div>
            <div className='password-div'>
              <label className='lable-div' >Password</label>
              <input  className='input-div'/>
            </div>
            <div className='submit-div'>
              <button>Submit</button>
            </div>
          </form>
      
    </div>
  );
};

export default Login
