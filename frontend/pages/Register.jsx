import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <>
    <Header/>
    <div className='formbody'>
        <div className="form">
            <h1>Register</h1>
            <form action="">
                
                <label htmlFor="uname">User Name</label>
                <input type="text" id='uname' placeholder='Username' />

                <label htmlFor="name">Your Full Name</label>
                <input type="text" id='name' placeholder='Full Name' />

                <label htmlFor="email">Your E-mail ID</label>
                <input type="email" id='email' placeholder='E-mail' />

                <label htmlFor="pswd">Enter Password</label>
                <input type="password" name="" id="pswd" placeholder='Password'/>

                <label htmlFor="cpswd">Confirm Password</label>
                <input type="password" name="" id="cpswd" placeholder='Confirm Password'/>
                <button className='reg-btn'>Submit</button>
            </form>
        </div>
      
    </div>
    <Footer/>
    </>
    
  )
}

export default Register
