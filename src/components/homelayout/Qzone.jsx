import React from 'react';
import swimmimgImage from"../../assets/swimming.png"
import classImage from"../../assets/class.png"
import playImage from"../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className="font-bold mb-5">Q-Zone</h2>
            <div className='space-y-5'>
               <img src={swimmimgImage} alt="" />
               <img src={classImage} alt="" />
               <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;