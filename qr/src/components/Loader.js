import React, { useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { useState } from 'react';


const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#4F67FF");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`h-full w-full absolute top-0 left-0 bg-white transition-all ease-in-out duration-300 z-50 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                {loading ? <ClimbingBoxLoader color={color} size={50} className='top-0' /> : null}
            </div>
        </div>
    );
};

export default Loader;
