//import './form.css';
import Navbar from './navbar.jsx';
import {useState} from 'react';
function SignUp(){
    let [data,changeData]=useState({
        name:"",
        email:"",
        pass:""
    });
    const Change=(event)=>{
              let temp={...data};
              temp[event.target.id]=event.target.value;
              changeData(temp);
    }
    const submitData=()=>{
        var xhttp=new XMLHttpRequest();
        
        xhttp.onreadystatechange=function(){
            if(this.status==200 && this.readyState==4){
              const res=JSON.parse(xhttp.responseText);
              if(res.status=="OK"){
              alert("succesfully registered")
              window.location.assign("/blogs");
              }
              else{
              alert("email already registered");
              }
            }
        }
        xhttp.open("POST","http://localhost:8080/signup",true);
        xhttp.send(JSON.stringify(data));
    }
    return(
        <>
        <Navbar/>
        <div className="formPage">
        <h1>Blogger Web</h1>
     <div className="form">
        <h1>Sign up</h1>
        <p id="typing"></p>
       <div className="input"> <input type="text" id="name" value={data.name} onChange={Change} required/>
        <label className="name">Name</label>
    </div>
    <div className="input">
        <input type="text" id="email"  value={data.email} onChange={Change} required/>
        <label className="email">Email</label>
    </div>
    <div className="input">
        <input type="password" id="pass"  value={data.pass} onChange={Change} required/>
        <label className="pass">
            password
     </label></div> 
<button className="submit" onClick={submitData}>submit</button>
<label className="LoginMessage">Already have an account? <a href="login">Login</a></label>
</div>
</div>
</>
    );
}

export default SignUp;