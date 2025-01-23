import React from 'react';
import { Button } from '../ui/button';


export default function Header() {
    return (
        <div className='flex w-full h-[5rem] justify-between px-10 items-center  border-b border-gray-500 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-white shadow-lg'> 
            <div className='flex gap-5 items-center'>
                <img src='./logo.svg' alt='logo'></img>
                <p className='font-semibold text-[20px]'>Trip Planner</p>
            </div>
            <Button className='bg-orange-700 hover:bg-orange-500'>Login</Button>
        </div>
    )
}
