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
            <p className='font-bold text-[40px] text-orange-600' >Discover Your Next Adventure with AI:</p>
            <p className='font-bold text-[34px]' >Personalized Itineraries at Your Fingertips</p>
            <p className='font-semibold text-[18px] text-gray-500 mt-5' >Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
            <Button onClick={handleStarted} className='text-[16px]'>Get Started. It's Free</Button>
        </div>
    )
}
