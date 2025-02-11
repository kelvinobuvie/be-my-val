import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='main'>
        <div>
            <h1 className='mainHeading text-5xl flex justify-center'>Will you be my Val?</h1>
        </div>
        <div className='buttons flex justify-center'>
            <button>Yes!</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default Home