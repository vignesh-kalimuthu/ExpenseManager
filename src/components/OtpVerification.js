import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validOtp} from './Regex'

const OtpVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  
  
  const [otpError, setOtpError] = useState(false);

  const validateForm = () => {
   
   
    if (!validOtp.test(otp)) {
      setOtpError(true);
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const emailParam = searchParams.get('email');

  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [emailParam]);

  const validateOtp = () => {
    const data = { email, otp };
    
    axios
    .post("http://192.168.0.112:3000/otp", data)
    .then((response) => {
      console.log('Response Data:', response.data);
      const accessToken= response.data.accessToken;
      console.log('Token:', accessToken);
      console.log('email:', email);
    
        if (response.data.code === 200) {
          
          navigate(`/PasswordSetPage?email=${email}&accessToken=${accessToken}`);
        } else {
          setError('Invalid OTP. Please try again.');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred while verifying the OTP. Please try again.');
      });

      validateForm();
  };
  

 

  return (
    <div className='card d-grid border-radius rounded-5 w-25 position-absolute top-50 start-50 translate-middle'>
      <div className='d-grid gap-3 m-5 w-75'>
        <h1 className='text-info'>Verify Email!</h1>
        <form>
          <div className="p-2 form-group card-title text-lg-start fs-4">
            <label htmlFor="exampleInputEmail1">Email </label>
            <input
              type="email"
              className="form-control border-0 border-bottom border-info border-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              readOnly
            />
          </div>
          <div className="p-2 form-group text-lg-start fs-4">
            <label htmlFor="exampleInputPassword1" className='text-lg-start'>OTP</label>
            <input
              type="password"
              className="form-control border-0 border-bottom border-info border-4"
              id="exampleInputPassword1"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <span className="text-sm-start text-danger fs-6 ">
                {otpError && <p>email is invalid</p>}
              </span>
          </div>
          {error && (
            <div className="text-danger fs-6">
              {error}
            </div>
          )}
          <div className='mt-5'>
            <button
              type="button"
              className='ml-5 btn btn-success rounded-pill btn-lg'
              onClick={validateOtp}
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
