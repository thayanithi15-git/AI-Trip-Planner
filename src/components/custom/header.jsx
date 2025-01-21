import React from 'react';
import { Button } from '../ui/button';


export default function Header() {
    return (
        <div className='flex w-full h-[5rem] justify-between px-10 items-center border border-b'> 
            <div className='flex gap-5 items-center'>
                <img src='./logo.svg' alt='logo'></img>
                <p className='font-semibold text-[20px]'>Trip Planner</p>
            </div>
            <Button >Login</Button>
        </div>
    )
}
