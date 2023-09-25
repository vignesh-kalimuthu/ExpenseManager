import React, { useState } from 'react';

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues([...values, inputValue]);
    setInputValue('');
    setModalOpen(false);
  };

  return (
    <div className='parent-main'>
      {/* Your existing JSX code here */}
      <div className="d-flex bg-none flex-row bd-highlight m-1 justify-content-evenly align-items-center">
        <div className="rounded-3 bd-highlight flex-fill m-2 p-5 bg-secondary">
          <p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                {/* SVG Path */}
              </svg>
            </span> Total Income
          </p>
          <h3>45000</h3>
        </div>
        {/* Other similar blocks */}
        <div onClick={handleAddClick} className="rounded-3 bd-highlight flex-fill m-2 p-5 bg-secondary" style={{ cursor: 'pointer' }}>
          <p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                {/* SVG Path */}
              </svg>
            </span> Add Value
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Value</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <input type="text" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Display added values */}
      <div className="row mt-2" style={{ height: '50%' }}>
        {values.map((value, index) => (
          <div key={index} className="col rounded-3 d-flex bg-white flex-row bd-highlight m-3 justify-content-evenly align-items-center">
            <div className='m-5' >{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
