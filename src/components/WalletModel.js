import React from 'react'

const WalletModel = () => {
  return (
    <div> 
    
    <div className="modal fade"   aria-labelledby="exampleModalLabel" id="WalletModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Wallet</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <label>Wallet Name</label>
            <input type="text" ></input>
            <label>Wallet Amount</label>
            <input type="text" ></input>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" >Add Wallet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WalletModel