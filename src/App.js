import React from "react";

import { Route, Routes, Link } from 'react-router-dom'
import Home from './component/Home';
import Book from './component/Book';
import Member from './component/Member';

function App() {
  return (    
    <div>   
      <ul>
        <li>
          <Link to="/api/sample/">Home</Link>
        </li>
        <li>
          <Link to="/api/sample/book">Book</Link>          
        </li>
        <li>
          <Link to="/api/sample/member">Member</Link>
        </li>
      </ul>   
      <Routes>
        <Route exact path="/api/sample" element={<Home/ >} />
        <Route path="/api/sample/book" element={<Book/ >} />
        <Route path="/api/sample/member" element={<Member/ >} />      
      </Routes>         
    </div>        
      
  );

};

export default App;
