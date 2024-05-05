import React from "react";
import twitter from '../../src/Images/Twitter Icon.png'
import facebook from '../../src/Images/Facebook Icon.png'
import instagram from '../../src/Images/Instagram Icon.png'
import github from '../../src/Images/GitHub Icon.png'

export const Footer = () => {
  return (
    <nav className="footer-container">
      <img src={twitter}></img>
      <img src={facebook}></img>
      <img src={instagram}></img>
      <img src={github}></img>
    </nav>
  )
}