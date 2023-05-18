import React from 'react';
import Image from 'next/image';
import NavImg from '../../public/assets/images/grants.svg';

const Nav = ({className}) => {
return (
        <div className={className + ' bg-white p-4 h-8 flex flex-row items-center justify-start'} >
            <Image src={NavImg} className='h-full w-min'/>
            <span className='text-gray-400 ml-auto p-0 m-0 text-sm leading-[normal]'>01270 522068</span>
        </div>
)
}

export default Nav;