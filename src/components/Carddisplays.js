
import React from 'react';
import { Mastercard} from 'react-payment-logos/dist/flat';


const Carddisplays = () => {

   

   
  return (
   <div class=" w-50  rounded-4 shadow-lg text-black card-color  p-3 m-3">
    <div className='d-flex align-items-left ml-3'><Mastercard/></div>
    <div class="d-flex align-items-center ml-3"><h3>75421 4553 5454 XXXX</h3></div>
    <div class="row mt-5"><div class="col left-align-label">
      <h5>Card Holder</h5>vignesh k</div>
      <div class="col ml-5  "><h5 class="">Balance</h5><p>10000</p></div>
      </div>
      </div>
  
  )
}

export default Carddisplays