import React, { useState, useEffect } from "react";
import axios from "axios";
import { validEmail, validName, validAge } from "./Regex";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    axios
      .get("http://192.168.0.112:3000/gender")
      .then((response) => {
        console.log(response.data.data)
        setGenderOptions(response.data.data);
        setDisplay(true);
         
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [email, setEmail] = useState("");
  const [genderOptions, setGenderOptions] = useState([]);
  const [gender, setGender] = useState("");
  const [display, setDisplay] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const validateForm = () => {
    if (!validName.test(name)) {
      setNameError(true);
    }
    if (!validAge.test(age)) {
      setAgeError(true);
    }
    if (!validEmail.test(email)) {
      setEmailError(true);
    }
  };

 

  const handleSubmit = () => {
    const data = { name, age, gender, email };
    axios
      .post("http://192.168.0.112:3000/register", data)
      .then((response) => {
        console.log(response.data.message);

        if (response.data.code === 200) {
          handleClick( email);
        }else if(response.data.code === 406){
          setEmailErrorMessage('Email already exists. Please use a different email.');
        }
         })
      .catch((error) => {
        console.error(error);
      });
    validateForm();
  };
  
  const Navigate = useNavigate();
  const handleClick = (email) => {
    Navigate(`/OtpVerification?email=${email}`);
  };
  


  return (
    <div>
      <div className="card d-grid border-radius rounded-5 w-25 position-absolute top-50 start-50 translate-middle">
        <div className="d-grid gap-3 m-5 w-75">
          <h1 className="text-info">SignUp Form!</h1>
          <form>
            <div className="p-2 form-group card-title text-lg-start fs-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-info border-4"
                aria-describedby="emailHelp"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="text-sm-start text-danger fs-6">
        
                {nameError && <p>name is invalid</p>}
              </span>
            </div>
            <div className="p-2 form-group text-lg-start fs-4">
              <label className="text-lg-start ">Age</label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-info border-4"
                placeholder="enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <span className="text-sm-start text-danger fs-6">
                {ageError && <p>age is invalid</p>}
              </span>
            </div>
            <div className="p-2 form-group text-lg-start">
              <label className="text-lg-start fs-4">Gender</label>
              {Array.isArray(genderOptions) && display && (
                <select
                  className="form-select border-0 border-bottom border-info border-4"
                  aria-label="Default select example"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  {genderOptions.map((option) => (
                    <option key={option.gender_id} value={option.gender_id}>
                      {option.gender_name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="p-2 form-group text-lg-start fs-4">
              <label className="text-lg-start">Email</label>
              <input
                type="email"
                className="form-control border-0 border-bottom border-info border-4"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="text-sm-start text-danger fs-6">{emailError && <p>{emailErrorMessage}</p>}
               </span>

            </div>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-primary rounded-pill btn-lg "
                onClick={handleSubmit}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
