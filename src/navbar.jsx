import './navbar.css';
import {useState,useContext} from 'react';
import { Context } from './login';
function Navbar(){
    //const loggedIN=useContext(Context);
    let [loggedIN,changeStatus]=useState(localStorage.getItem("loggedIN"));
    
    const Logout=()=>{
        localStorage.setItem("loggedIN",false);
        localStorage.setItem("email","");
        changeStatus(false);
        alert("succesfully logged out");
        window.location.assign("/");
    }
    let navStyle={
        width:"0px",
        
        border:"0px solid black",
        
        

    };
    const [style,setStyle]=useState(navStyle);
    const changestyle=(val,)=>{
        setStyle({border:"2px solid black",width:val});
        
    }
    return(
        <div className="navContainer">
       <div className="burger" onClick={()=>changestyle("250px")}></div>
       <div className="Nav" style={style}>
        <div className="close" onClick={()=>setStyle(navStyle)}>X</div>
       <div className="Navelem" onClick={()=>window.location.assign("/")}>Home</div>
       <div className="Navelem" onClick={()=>window.location.assign("/blogs")}>Explore blogs</div>
       { (loggedIN=='false')?
       (<><div className="Navelem" onClick={()=>window.location.assign("/signup")}>Sign Up</div>
       <div className="Navelem" onClick={()=>window.location.assign("/login")}>Login</div></>):(
        <>
        <div className="Navelem" onClick={()=>window.location.assign("/blogs/user")}>My blogs</div>
        <div className="Navelem" onClick={()=>window.location.assign("/compose")}>Compose blog</div>
        <div className="Navelem" onClick={Logout}>Logut</div>
        </>
       )}

       </div>
       
       </div>
    );
   
}
export default Navbar;