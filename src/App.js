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
          <Link to="/api/library/">Home</Link>
        </li>
        <li>
          <Link to="/api/library/book">Book</Link>          
        </li>
        <li>
          <Link to="/api/library/member">Member</Link>
        </li>
      </ul>   
      <Routes>
        <Route exact path="/api/library" element={<Home/ >} />
        <Route path="/api/library/book" element={<Book/ >} />
        <Route path="/api/library/member" element={<Member/ >} />      
      </Routes>         
    </div>        
      
  );

};

export default App;
