import React from 'react'
import classes from './HomePage.module.css'
import exampleImage from '../assets/example.jpg';
function HomePage() {
  return (
    <>
    
    <div style={{ textAlign: 'center' }} className={classes.homepageheading}> New Page </div>
    <img  src={exampleImage} alt=""  />
    <div><p> To get to the next page</p>
    <a href='https://www.google.co.in/'>click here</a>
    </div>
    </>
  )
}

export default HomePage