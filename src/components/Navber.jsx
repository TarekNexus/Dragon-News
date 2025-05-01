import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import users from"../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';


const Navber = () => {
    const {user,logOut}=use(AuthContext)
    const handleLogOut=()=>{
        logOut().then(() => {
         alert("Sign-out successful")
          }).catch((error) => {
           console.log(error);
          });
    }
    return (
        <div className='flex justify-between items-center'>
           <div className='w-[200px]'>{user&&user.email}</div>
           <div className='nav flex gap-5 text-accent'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
           </div>
           <div className='login-btn flex gap-5'>
            <img src={users} alt="" />
            {
                user? <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button>:<Link to="/auth/login"><button className='btn btn-primary px-10'>Login</button></Link>
            }
            
           </div>
        </div>
    );
};

export default Navber;