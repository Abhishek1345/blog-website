
import styles from './home.module.css';
import Navbar from './navbar.jsx';
import {useState,useEffect} from 'react';
export default function Home(){
  let [name,changeName]=useState("");
  let [email,changeEmail]=useState("");
  let [msg,changeMsg]=useState("");
  let [text,changeText]=useState("");
  let [i,incr]=useState(0);
  const targetText="The best place to share your thoughts";
 
  useEffect(()=>{
    setTimeout(()=>{
      changeText((previousText)=>previousText+targetText.charAt(i));
      if(i<targetText.length-1){
        incr(i+1);
      
      }
    },100)
  },[i]);
  const Send=()=>{
    var xhttp=new XMLHttpRequest();
    let message=`message from name:`+name+`\n email:`+email+`\n message:`+msg;
    xhttp.open("GET",encodeURI("https://api.telegram.org/bot1615595580:AAEoUHfmuuMukkWfRib3zTa7OVCGMYOtmk8/sendMessage?chat_id=1776441779&text="+message),true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    changeEmail("");
    changeMsg("");
    changeName("");
  }
    return (
      <>
      <Navbar/>
      <div className={styles.wrapper}>
        
        <h1 className={styles.home}>Blogger Web</h1>
        <p className={styles.home}>{text}</p>
        {(localStorage.getItem("loggedIN")=="false")?
        (<div><button onClick={()=>window.location.assign('/login')} className={styles.home}>Login</button>
        <button onClick={()=>window.location.assign('/signup')} className={styles.home}>Sign Up</button></div>):(
          <div><button onClick={()=>window.location.assign('/compose')} className={styles.home}>Write a Blog</button></div>
        )
}
        
      </div>  
      <div className={styles.wrapper}>
      <h2 className={styles.home}>Explore our blogs</h2>
        <p className={styles.home}>Write , create and read blogs. explore literature , history ,science,
          tech and share you knowlede with the world.
          
        </p>
        <div><button className={styles.home}>Explore</button></div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.home}>Contact US</h2>
        <div className={styles.form}>
        <div className="input"> <input type="text" id="name" value={name} onChange={(event)=>changeName(event.target.value)} required/>
            <label className="name">Name</label>
        </div>
        <div className="input">
        <input type="text" id="email" value={email} onChange={(event)=>changeEmail(event.target.value)} required/>
        <label className="email">
            Email
     </label></div>
     <div><textarea value={msg} onChange={(event)=>changeMsg(event.target.value)}></textarea></div>
      <div><button className={styles.home} onClick={Send}>Send</button></div>
        </div>
       
      </div>
      </>
    );
}