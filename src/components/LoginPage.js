

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { validPassword, validEmail } from './Regex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  

  const validateForm = () => {
    if (!validEmail.test(email)) {
      setEmailError(true)
    }
    if (!validPassword.test(password)) {
      setPasswordError(true)
    }
  }


  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { email, password }
    axios
      .post("http://192.168.0.112:3000/loginverify", data)
      .then((response) => {
        console.log(response.data.message)
        
        if (response.data.code === 200) {
         
          console.log("Login Successful")
            localStorage.setItem('accessToken',response.data.Token)
            console.log(response.data.Token)
            Navigate('/Dash');
          
         
        }
      })
      .catch((error) => {
        console.error(error)
      })
    validateForm()
  }

  return (
    <div className=' card d-grid bg-secondary border-radius rounded-5  w-25 position-absolute top-50 start-50 translate-middle '>
      <div className='d-grid gap-3 m-5 w-75 '>
        <h1 className='text-info'>Login!</h1>
        <form>
          <div className="p-2 form-group card-title text-lg-start fs-4 ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control border-0 border-bottom border-info border-4 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-sm-start text-danger fs-6">
              {emailError && <p>email is invalid</p>}
            </span>
          </div>
          <div className="p-2 form-group text-lg-start fs-4">
            <label htmlFor="exampleInputPassword1" className='text-lg-start'>
              Password
            </label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-0 border-bottom border-info border-4"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <span className="text-sm-start text-danger fs-6">
              {passwordError && <p>password is invalid</p>}
            </span>
          </div>

          <div className='mt-5'>
          <button
              type="submit"
              className="btn btn-primary rounded-pill btn-lg"
              onClick={handleSubmit}
            >
              Login
            </button>
            <Link to="/SingUpPage">
              <button
                type="submit"
                className='ml-5 btn btn-success rounded-pill btn-lg'
              >
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
