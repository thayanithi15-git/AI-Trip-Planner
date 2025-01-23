import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export default function Body() {

    const navigate = useNavigate();

    const handleStarted = () => {
        navigate('/trip-plan')
    }

    return (
        <div className='flex flex-col items-center gap-7 mt-[7%]'>
            <p className='font-bold text-[40px] text-orange-600' >Explore Your Next Adventure with AI</p>
            <p className='font-bold text-[34px] text-white' >Custom Itineraries, Just for You</p>
            <p className='font-semibold text-[18px] text-gray-400 mt-5' >Your personal travel planner, designing unique journeys tailored to your preferences and budget.</p>
            <Button onClick={handleStarted} className='text-[16px] bg-blue-700 mt-6 hover:bg-blue-500'>Get Started. It’s Free</Button>
        </div>
    )
}
