import React from "react"
import logo1 from "./Pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer style={{height:'1rem' , display:'flex' , alignItems:'center' , justifyContent: 'center'}}>
        <div className='conatiner text-center top' >
          <div className='img'>
            <img src={logo1} alt=''  style={{width:'4rem' , height:"4rem"}}/>
          </div>
          <p>© 2023. All rights reserved by Islam Khalil.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
