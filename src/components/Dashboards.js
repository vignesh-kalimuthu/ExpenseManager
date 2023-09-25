// import React from 'react'
// import Headcomponent from './Headcomponent'
// import Sidebars from '../components/Sidebars'


// import './styles/style.css'
// import Main from '../components/Main'



// const Dashboards = () => {
//   return (
//   <div className='bg-color'>
//     <div className='row'>
//       <Headcomponent/>
//       <div className='col-2 side' ><Sidebars/></div>
//       <div className='col-10  '><Main/></div>
//     </div>
    
   
   
//   </div>
    
//   )
// }

// export default Dashboards

// Dashboards.js

import React, { useState } from 'react';
import Headcomponent from './Headcomponent';
import Sidebars from '../components/Sidebars';
import './styles/style.css';
import Main from '../components/Main';

const Dashboards = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='bg-color'>
      <div className='row'>
        <Headcomponent/>
        <div className={`col-2 side ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Sidebars toggleSidebar={toggleSidebar} />
        </div>
        <div className='col-10'>
          <Main isSidebarOpen={isSidebarOpen}  />
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
