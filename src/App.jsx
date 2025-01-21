import React from 'react'
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'lucide-react';
import MainTrip from './pages/trip/page';
import Body from './components/custom/body';

export default function App() {
  return (
    <div>
      <Body />
    </div>
  )
}
