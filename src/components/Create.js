import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
 class Create extends React.Component{
     constructor(props){
         super(props);
         this.onChangeName= this.onChangeName.bind(this);
         this.onChangeDate=this.onChangeDate.bind(this);
         this.onChangeNic=this.onChangeNic.bind(this);
         this.onSubmitValue=this.onSubmitValue.bind(this);

         this.state={
             name:'',
             dob:'',
             nic:''
         }
         
     }
     onChangeDate=e=>{
         this.setState({
             dob:e.target.value
         });
     }
onChangeName=e=>{

    this.setState({
        name:e.target.value
    }
   
    );
   
}

onChangeNic= e=>{
    this.setState({
        nic:e.target.value
    });
}
  
     onSubmitValue(e){
         e.preventDefault();
         console.log(this.state.nic)
        const obj ={
            name:this.state.name,
          
            nic:this.state.nic
        };
        axios.post("http://localhost:4000/customer/add",obj).then(res=> console.log(res));

         this.setState({
             name:'',
             dob:'',
             nic:''
         })
     }
    render(){
         return(
         <div className="container">
             <h3>Create User</h3>
             <div className="card">
                 <div className="col-md-10 offset-1">
                 <form onSubmit={this.onSubmitValue}>
                     <div className="form-group">
                         <label>Name</label>
                         <input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control"></input>
                     </div>
                     <div className="form-group">
                         <label>Date Of Birth</label>
                         <input type="date" value={this.state.dob} onChange={this.onChangeDate} className="form-control"></input>
                     </div>
                     <div className="form-group">
                         <label>NIC</label>
                         <input type="text" value={this.state.nic} onChange={this.onChangeNic} className="form-control"></input>
                     </div>
                     <button className="btn btn-success mb-3" type="submit">Save</button>
                 </form>
                 </div>
                
             </div>
         </div>
     );
 }
}
 export default Create;