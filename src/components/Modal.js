import React, { useState } from "react";

const Modal = (props) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [updateValue, setUpdateValue] = useState(displayValue);

  const handleClick = () => {
    setUpdateValue(displayValue);
  }

  const handleChange = (e) => {
    setDisplayValue(e.target.value);
  }

  return (
    <div>
      <h3>{updateValue}</h3>
      <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Input</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" value={displayValue} onChange={handleChange}></input>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
