import { useParams } from "react-router-dom";
import {useState} from 'react';
import Navbar from "./navbar";
import styles from './Blog.module.css';
function Blog(){
const params=useParams();
let [blog,updateBlog]=useState("");
let [title,updateTitle]=useState("Loading....");
const xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.status==200 && this.readyState==4){
        let data=JSON.parse(xhttp.responseText);
        if(data.status=="OK"){
        updateBlog(data.blog);
        updateTitle(data.title);
        }
        else{
            updateBlog("Blog Not found");
            updateTitle("404");
        }
        
    }
}
xhttp.open("POST","http://localhost:8080/retrieve",true);
xhttp.send(JSON.stringify(
  {
    blogID:Number(params.blogID)
  }
))
    return(
        <>
<Navbar/>
<div className={styles.wrapper}>
    <h1>{title}</h1>
    <p className={styles.blog}>
    {blog}
    </p>
</div>
</>
    );
}
export default Blog;