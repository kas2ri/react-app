import React from "react";
 function Namelist(props)
 {
     return(
        <div> 
               <img src={props.avatar}/>
               <p>{props.name}</p>
               <p>{props.location}</p>
               <p>{props.email}</p>
        </div>
      
     )
 }

 export default Namelist;