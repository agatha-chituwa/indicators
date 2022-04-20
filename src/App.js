import './App.css';
//  import User from './components/User';
import Header from './components/Header'
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Indicator from './components/Indicator';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {

  
  return (
    <div className="table-container">
      <ResponsiveAppBar/>
      <Indicator/>
      {/* <User/> */}

      {/* {loading ? (
        <span> loading... </span>
      ): (
       <Table columns={columns} data={products} />
      )}*/}
    </div> 
  );
}

export default App;
