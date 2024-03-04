
import { useEffect , useState} from "react";
import styles from './Explore.module.css';
import Navbar from "./navbar";
function Explore(){
let [elems,UpdateElems]=useState([<Navbar key={-1}/>]);
const Load=(id)=>{
    window.location.assign("/blogs/"+id);
}


useEffect(
    ()=>{
        const xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
           let data=JSON.parse(xhttp.responseText);
           console.log(data.blogIDs);
           let temp=[...elems];
           data.blogIDs.map((blogID,i)=>{
           
            temp.push((<div className={styles.blogInfo} key={i}>
            <p>"{data.titles[i]}"</p> 
            <p>Written By {data.authors[i]}</p> 
            <button className={styles.button} onClick={()=>{Load(blogID)}}>Read</button>
          </div>))
              
              // console.log(elems);
           })
          UpdateElems(temp);
          console.log(elems);

        }
        }
        xhttp.open("GET","http://localhost:8080/list",true);
        xhttp.send();

    },
[]);

return elems;
}
export default Explore;