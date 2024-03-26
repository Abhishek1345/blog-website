import Navbar from './navbar';
import styles from './Compose.module.css';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
function Edit(){
const params=useParams();
let [text,changeText]=useState("");
let [title,changeTitle]=useState("");
useEffect(()=>{
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let data=JSON.parse(xhttp.responseText);
           if(data.title==undefined || data.blog==undefined){
          
           }
            
            changeTitle(data.title);
            changeText(data.blog);
        }
    }
    xhttp.open("POST","http://localhost:8080/retrieve",true);
    xhttp.send(JSON.stringify(
        {
            blogID:params.blogID,
           
        }
    ))
},[])
const Publish=()=>{
  if(title==""){
      alert("title cannot be empty");
      return;
  }
  if(text==""){
    alert("blog cannot be empty");
    return;
  }
  const xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if(this.status==200 && this.readyState==4){
        var res=JSON.parse(xhttp.responseText);
        if(res.status=="OK"){
          alert("blog published succesfully");
          window.location.assign("/blogs/user");
        }
        else{
          alert("some error occured");
          console.log(res.err_code);
        }
    }
  }
  xhttp.open("POST","http://localhost:8080/edit",true);
  xhttp.send(JSON.stringify({
    blog:text,
    title:title,
    blogID:params.blogID,
    edit:true
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
export default Edit;