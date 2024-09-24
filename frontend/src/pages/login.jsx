import React from 'react'
import '../styles/login.css'


const login = () => {
  return (
 <>
<h1>Login</h1>
<form>
<input type='mail' placeholder='email' />
 <input type="password" placeholder="password" />
 

  <button>Login</button>
  <p>This is an error!</p>
  <span>don't you have an account?</span>
  <button>Register</button>
</form>
</> 
 
  )
}

export default login
