import React from 'react'

import profilepicture from "../assets/images/profile.jpg"

function Profile() {
    const profiletitle="backend developer"
  return (
    <div>
      <div><h1>Profile Title:{profiletitle}</h1></div>
      <div>
        <img src={profilepicture} alt="" />
      </div>
    </div>
  )
}

export default Profile
