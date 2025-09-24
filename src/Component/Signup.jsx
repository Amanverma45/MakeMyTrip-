import React from 'react'
import './Style/Signup.css'

const Signup = () => {
  return (
    <div class="wrap">
    <h2>Create Account</h2>

    <form action="#" method="post">
      <div class="row">
        <div class="col">
          <label for="fn">First name</label>
          <input id="fn" name="firstName" type="text" placeholder="Aman" required/>
        </div>
        <div class="col">
          <label for="ln">Last name</label>
          <input id="ln" name="lastName" type="text" placeholder="Verma" required/>
        </div>
      </div>

      <label for="email">Email</label>
      <input id="email" name="email" type="email" placeholder="aman@example.com" required/>

      <label for="pw">Password</label>
      <input id="pw" name="password" type="password" placeholder="At least 8 characters" required/>

      <div class="actions">
        <button type="submit">Sign up</button>
        <button type="reset" class="btn-ghost">Reset</button>
      </div>

      <div class="small">By signing up you agree to our Terms and Privacy Policy.</div>
    </form>
  </div>
  )
}

export default Signup
