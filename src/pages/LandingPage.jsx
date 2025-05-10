import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import { Link } from 'react-router-dom';
import "../components/Button/Button.css"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <section className='Banner'>
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    <h2 className='text-9xl ml-10'>Study. Smarter. Together.</h2>
                    <Link to={"/signup"}><button className="cta text-black px-4 py-2 rounded-lg font-semibold hover:bg-none w-50 ml-15 mt-20">Get Started</button></Link>

                </div>

                <img className="h-250 w-250 mr-0" src="src/assets/StudyGroup.jpg" alt="Banner" />
            </div>
        </section>
    </div>
  )
}

export default LandingPage
