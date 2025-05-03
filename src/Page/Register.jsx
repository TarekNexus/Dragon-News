import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const {createUser,setUser}=use(AuthContext)

  const [nameError,setNameError]=useState("")
  const handleRegister=(e)=>{

    e.preventDefault()

    const form=e.target;
    const name=form.name.value;
    if(name.length<5){
      setNameError("Name should ne 5 character ")
    return
    }
    else{
      setNameError("")
    }
    const photo=form.photo.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log({name,photo,email,password});


    createUser(email,password)
    .then(result => {
    
      const user = result.user;
      // console.log(user);
      setUser(user)
      
    })
    .catch((error) => {
      
      const errorMessage = error.message;
       alert(errorMessage)
    });
  

  }
    return (
        <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">Register your account</h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
            <label className="label">Name</label>
            <input required name="name" type="text" className="input" placeholder="Enter your name" />
             {
              nameError && <p className='text-red-500 text-xsf'>{nameError}</p>
             }
            <label className="label">Photo URL</label>
            <input required name="photo" type="text" className="input" placeholder="Enter your Photo URL" />
             
              <label className="label">Email</label>
              <input required name="email" type="email" autoComplete="username" className="input" placeholder="Email" />


              <label className="label">Password</label>
              <input required name="password" type="password" autoComplete="current-password" className="input" placeholder="Password" />

              
             
              <button type='submit' className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold pt-5 text-center">Already Have An Account ? <Link className="text-secondary " to="/auth/login">Login</Link></p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Register;