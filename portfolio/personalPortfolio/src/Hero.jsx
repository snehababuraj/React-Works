import React from 'react'
import profilepicture from './assets/images/sandraa.jpg'

function Hero() {
  return (
    <div className="bg-primary p-3 text-white d-flex justify-content-center">
        <div>
            <h4>Hello,my name is</h4>
            <h2>Sandra Prabhakar</h2>
            <h3>Full Stack Developer</h3>
           
            <div>
               <button>Download cv</button>
                <button>Play Videos</button>
            </div>
        </div>
        <div>
            <img  className="w-100 " src={profilepicture} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
