import { useState } from 'react'
import './App.css'
import Calendar from './components/calendar'

function App() {

  return (
    <>
    <Calendar date={new Date()} />
    </>
  )
}

export default App
