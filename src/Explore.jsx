
import { useEffect , useState} from "react";
import styles from './Explore.module.css';
import Navbar from "./navbar";
function Explore(props){
let [elems,UpdateElems]=useState([<Navbar key={-1}/>]);
let [render,Rerender]=useState(0);
const Load=(id)=>{
    window.location.assign("/blogs/"+id);
}
const Delete=(id)=>{
         if(window.confirm("Do you want to delete this")==true){
            const xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                if(this.status==200 && this.readyState==4){

                }
            }
            xhttp.open("POST","http://localhost:8080/delete",true);
            xhttp.send(JSON.stringify(
                {
                    blogID:id
                }
            ))
            Rerender(render+1);
         }
}
const Edit=(id)=>{
   window.location.assign("/edit/"+id);
}

useEffect(
    ()=>{
        const xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
           let data=JSON.parse(xhttp.responseText);
           console.log(data.blogIDs);
           let temp=[<Navbar key={-1}/>];
           if(data.blogIDs.length==0){
            temp.push(<h1>sorry we don have any blogs to showh here <br/>consider writing one! </h1>)
           }
           data.blogIDs.map((blogID,i)=>{
           
            temp.push((<div className={styles.blogInfo} key={i}>
            <p>"{data.titles[i]}"</p> 
            <p>Written By {data.authors[i]}</p> 
            <button className={styles.button} onClick={()=>{Load(blogID)}}>Read</button>
            {((localStorage.getItem("loggedIN")=="true" && props.author!="")? (<>
            <button className={styles.button} onClick={()=>Delete(blogID)}>Delete</button>
            <button className={styles.button} onClick={()=>Edit(blogID)}>Edit</button>
            </>):(<></>))}
          </div>))
              
              // console.log(elems);
           })
          UpdateElems(temp);
          console.log(elems);
          console.log(props.author);
        }
        }
        xhttp.open("POST","http://localhost:8080/list",true);
        xhttp.send(JSON.stringify(
            {author:props.author}
        ));

    },
[render]);

return elems;
}
export default Explore;