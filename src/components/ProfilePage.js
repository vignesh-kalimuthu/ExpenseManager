import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import UserDetails from './UserDetails';





const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const [show,setShow]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
       
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://192.168.0.112:3000/profile-url', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
         .then((response) => {
           console.log(response.data.profile_url)
            setImageUrl(response.data.profile_url);
          })
          .catch((error) => {
            console.error('Error fetching image:', error);
         });
     }, []);

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  }

  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", image);
  //   console.log(image)
  //   const Token = localStorage.getItem('accessToken');
  //    console.log('Access Token:', Token);
  //  axios
  //     .post("http://192.168.0.112:3000/profile", formData, {
  //       headers: {
          
  //         Authorization: `Bearer ${Token}`
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.code === 200) {
  //         setUserImage(res.data.formData);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };

  const handleUpload = async (e) => {
    e.preventDefault();
  
    
    if (!image) {
      console.error("No image selected for upload");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("file", image);
  
      const accessToken = localStorage.getItem('accessToken');
  
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
  
      console.log('Access Token:', accessToken);
  
      const response = await axios.post(
        "http://192.168.0.112:3000/profile",
        formData,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'multipart/form-data', 
          },
        }
      );
  
      if (response.data.code === 200) {
       
        setImageUrl(response.data.profile_url);
        console.log("Image uploaded successfully");
      } else {
        console.error("Error uploading image:", response.data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  

  return (
    <div className="container w-75 m-5">
      <div className="row">
        <div className="col w-25">

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit={handleUpload}>
            <input type="file" name="file" onChange={onInputChange} />
            <button type="submit" className="btn btn-primary">Upload</button>
          </form></Modal.Body>
        
      </Modal>
          
          <div className='border border-dark rounded p-3 shadow' style={{ position: 'relative', display: 'inline-block' }}>
      {imageUrl && <img src={imageUrl} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />}
      <FontAwesomeIcon icon={faSquarePen} size='3x' onClick={handleShow} style={{ position: 'absolute', bottom: '5px', right: '5px' }} />
    </div>
          
        
        </div>
        <div className="col w-75">
          
         <UserDetails />

     
    
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;


