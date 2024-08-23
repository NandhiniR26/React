import React from 'react'
import image from "../Image1.jpg"


const User =() => {
  return<div className='card-container'>
    <span className='pro'>ONLINE</span>
    <img src={image} alt="user"/> 
    <h3>JOHN DOE</h3>
    <h3>San-Francisco</h3>
    <p>Front end developer</p>
    <div>
      <button>message</button>
      <button>following</button>
      <div>
        <h6>Skills</h6>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node</li>
          <li>UI/UX</li>
          
        </ul>
      </div>
    </div>
     
      </div>
}

const UserCard = () => {
  return (
    
  <User/>
    
  )
}

export default UserCard