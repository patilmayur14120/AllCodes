import react ,{Component} from 'react';

import { variables } from './Variables';

export class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            credentials:[],
            CrId:0,
            Username:"",
            Password:""

            

        }
          
    }
    validateform(){  
       
       var Username=document.getElementById("username").value;
       var Password=document.getElementById("password").value;
          console.log(Username);
          console.log(Password);
        if (Username==null || Username==""){  
          alert("Name can't be blank");  
          return false;  
        }else if(Password.length<6){  
          alert("Password must be at least 6 characters long.");  
          return false;  
          }  
        }
   
   
   
    render(){
        return(
           
            <div>
                <button type="button"
                className="btn btn-primary m-2 float-end"
                data-toggle="modal"
                data-target="#exampleModal"
                aria-controls="exampleModal"
                >LOGIN</button>
                
                <div className='modal fade' id="exampleModal" tabIndex="-1" >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                <div className='modal-content'> 
                    <div className='modal-header'>
                        <h5 className='modal-title'>ADMIN LOGIN</h5>
                        <button type="button" className="close btn-close" data-dismiss="modal" aria-hidden="true" >×</button>
               
                        
                    </div>

                            <div className=' modal-body'>
                                <div className='input-group mb-3'>
                                <span className='input-group-text' >User Name</span>
                                <input type="text" className='form-control' id="username"
                                value={this.value} required/>
                                </div>
                                <div className='input-group  mr-10'>
                                <span className='input-group-text' >  Password </span>
                                <input type="text" className='form-control' id="password"
                                value={this.value}  required/>
                                
                                </div>
                                <button type="button"
                                    className='btn btn-primary float-start'
                                    onClick={()=>this.validateform()}
                                    >Login</button>
           
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }

}