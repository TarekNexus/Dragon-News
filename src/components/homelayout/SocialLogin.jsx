import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from 'react-icons/gr';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>login with social</h2>
            <div className='space-y-3'>
                <button className='btn btn-outline w-full btn-secondary'><FcGoogle size={24} /> Login with Google</button>
                <button className='btn btn-outline  w-full btn-primary'><GrGithub size={24}/> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;