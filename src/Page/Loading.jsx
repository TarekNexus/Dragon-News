import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-infinity" style={{ width: '8rem', height: '8rem' }}></span>
        </div>
    );
};

export default Loading;
