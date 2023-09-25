

import React, { useState, useEffect } from "react";
import axios from "axios";
import { validPassword } from "./Regex";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const PasswordSet = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [accessToken, setToken] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 


  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);


  const validateForm = () => {
    if (!validPassword.test(password)) {
      setPasswordError(true);
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const emailParam = searchParams.get("email");
  const accessTokenParam = searchParams.get("accessToken");

  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }

    if (accessTokenParam) {
      setToken(accessTokenParam);
    }
  }, [emailParam, accessTokenParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = {
        email,
        password,
        accessToken,
      };

      axios
        .post("http://192.168.0.112:3000/login", data)
        .then((response) => {
          if (response.data.code === 200) {
            navigate("/");
          } else {
            setError("Password verification failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error(error);
          setError("An error occurred");
        });
    } else {
      setError("Password does not match.");
    }

    validateForm();
  };

  return (
    <div className="card d-grid border-radius rounded-5 w-25 position-absolute top-50 start-50 translate-middle">
      <div className="d-grid gap-3 m-5 w-75">
        <h1 className="text-info">Set Password</h1>
        <form>
        <div className="p-2 form-group card-title text-lg-start fs-4">
      <label>Password</label>
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control border-0 border-bottom border-info border-4"
          aria-describedby="emailHelp"
          placeholder="Enter Password"
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
        {passwordError && <p>Password is invalid</p>}
      </span>
    </div>

    <div className="p-2 form-group text-lg-start fs-4">
  <label>Confirm Password</label>
  <div className="password-input">
    <input
      type={showConfirmPassword ? "text" : "password"}
      className="form-control border-0 border-bottom border-info border-4"
      placeholder="Enter Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <span
      className="toggle-password"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
    </span>
  </div>
  <span className="text-sm-start text-danger fs-6">
    {confirmPasswordError && <p>Password is invalid</p>}
  </span>
</div>

          {error && <div className="text-danger fs-6">{error}</div>}

          <div className="mt-5">
            <button
              type="submit"
              className="ml-5 btn btn-success rounded-pill btn-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordSet;
