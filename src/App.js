import React from "react";
import { BrowserRouter as Router,Routes,Link,Route } from "react-router-dom";
import Create from './components/Create';
import Edit from './components/Edit';
import Index from './components/Index';


function app(){
  return(
  <div className="">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <Link to={'/'}>Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
      <li className="nav-item">
       <Link to={'/create'} className="nav-link">Create</Link>
      </li>
      <li className="nav-item ">
        <Link to={'/index'} className="nav-link">List</Link>
       
      </li>
     
    </ul>
  
  </div>
</nav>

    <Routes>
      <Route exact path="/create" element={<Create></Create>}/>
      <Route exact path="/index" element={<Index></Index>}/>
    </Routes>
  </div>
  );

}
export default app;