import './form.css';
import Navbar from './navbar';
import {useState,createContext, useEffect} from 'react';
const Context=createContext();

function Login(){
    
    let [data,changeData]=useState({
        
        email:"",
        pass:""
    });

    let [loggedIN,changeStatus]=useState(false);
    useEffect(()=>{
        changeStatus(localStorage.getItem("loggedIN"));
    },[]);
    useEffect(()=>{
        localStorage.setItem("loggedIN",loggedIN);
    },[loggedIN]);
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
                changeStatus(true);
                localStorage.setItem("email",data.email);
              alert("succesfully logged in");
              window.location.assign("/compose");
              }
              else{
                if(res.err_code=="WRONG_PASS")
                alert("incorrect password");
            else if(res.err_code=="DNE")
                 alert("this email is not registered");
              }
              
            }
        }
        xhttp.open("POST","http://localhost:8080/login",true);
        xhttp.send(JSON.stringify(data));
    }
    return(
        <>
        
        <Context.Provider value={loggedIN}>
        
        <Navbar/>
        <h1>Blogger Web</h1>
        <div className="form">
            <h1>Login</h1>
        <div className="input"> <input type="text" id="email" value={data.email} onChange={Change} required/>
            <label className="name">Email</label>
        </div>
        <div className="input">
        <input type="password" id="pass" value={data.pass} onChange={Change}required/>
        <label className="pass">
            password
     </label></div>
     <button className="submit" onClick={submitData}>Login</button>
     <label className="LoginMessage">Don't have an account? <a href="signup">Sign Up</a></label>
    </div>
    </Context.Provider>
    </>
    );
}
export {Context};
export default Login;