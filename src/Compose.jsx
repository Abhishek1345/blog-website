import Navbar from './navbar';
import styles from './Compose.module.css';
import {useState} from 'react';
function Compose(){
let [text,changeText]=useState("");
let [title,changeTitle]=useState("");
const Publish=()=>{
  if(title==""){
      alert("title cannot be empty");
      return;
  }
  if(text==""){
    alert("blog cannot be empty");
    return;
  }
  let xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if(this.status==200 && this.readyState==4){
        var res=JSON.parse(xhttp.responseText);
        if(res.status=="OK"){
          alert("blog published succesfully");
        }
        else{
          alert("some error occured");
          console.log(res.err_code);
        }
    }
  }
  xhttp.open("POST","http://localhost:8080/publish",true);
  xhttp.send(JSON.stringify({
    blog:text,
    title:title,
    author:localStorage.getItem("email")
  }))
}
    return(
        <>
        <Navbar/>
        <div className={styles.wrapper}>
         
       <div>  <div className={styles.input}>
          <input type="text" className={styles.title} value={title} onChange={(event)=>{changeTitle(event.target.value)}}required/>
          <label>Title</label>
        </div>
        </div> 
      <div><textarea className={styles.blog} value={text} onChange={(event)=>{changeText(event.target.value)}}>

      </textarea></div>
      <button className="submit" onClick={Publish}>publish</button>
      </div>
      </>
    );
}
export default Compose;