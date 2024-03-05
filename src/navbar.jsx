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
        // marginTop:"100px",
      // display:"none",
      display:"flex",
        width:"0px",
        height:"calc(100vh - 3%)",
        position:"absolute",
        zIndex:"2",
        float:"left",
       transform:"translateY(-10px)",
        background:"white",
        border:"0px solid black",
        transition:"width 1s cubic-bezier(0,0.5,1,1) , border 1s",
        

    };
    const [style,setStyle]=useState(navStyle);
    const changestyle=(val,)=>{
        setStyle((previousState)=>{return {...previousState,border:"2px solid black",width:val,display:"flex"}});
        
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