import React from "react";
import bird from '../../src/Images/bird.png'
import mail from '../../src/Images/Mail.png'
import linkedin from '../../src/Images/linkedin.png'


// photo, name, buttons
export const Info = () => {
  return (
    <div className="top-container">
      <img src={bird} className="profile-photo"></img>
      <div className="profile-container">
        <h1 className="profile-name">Huepert Bones</h1>
        <h2 className="profile-job-title">Frontend Developer</h2>
        <h3 className="profile-website">huepertbones.fungus.com</h3>

        <div className="button-container">
          <button className="email-button">
            <img src={mail}></img>
            Email
          </button>
          <button className="linkedin-button">
            <img src={linkedin}></img>
            LinkedIn
          </button>
        </div>
        <div className="about-container">
          <h1 className="about-title">
            About
          </h1>
          <h2 className="about-info">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h2>
      </div>
      <div className="interests-container">
        <h1 className="interests-title">Interests</h1>
        <h2 className="interests-info">Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones. Bones.</h2>
      </div>
      </div>
    </div>
  )
}