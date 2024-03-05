const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const app=express();
app.use(cors());
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'tuktuk27',
    database:'blogdata'
   });
  con.connect((err)=>{
    if(err) throw err;
   
  });
app.post('/signup',(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    })
    req.on("end",()=>{
        data=JSON.parse(data);
      
      let sql=`insert into users(email,name,pass) values('`
      +data.email+
      `','`+data.name+
      `','`+data.pass+`')`;
      con.query(sql,(err,result)=>{
          if(err) {
             res.send(JSON.stringify(
              {
                  status:"ERR",
                  err_code:err.code

              
              }
             ))
          }
          else{
              res.send(JSON.stringify(
                  {
                      status:"OK"
                  }
              ))
          }
})
    })
});
app.post('/login',(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    })
    req.on("end",()=>{
        data=JSON.parse(data);
      
      let sql=`select pass from users where email='`+data.email+`';`;
      con.query(sql,(err,result)=>{
          if(err) {
             res.send(JSON.stringify(
              {
                  status:"ERR",
                  err_code:err.code

              
              }
             ))
          }
          else{
            let response;
            if(result[0]==undefined){
                response={
                    status:"ERR",
                    err_code:"DNE"
                }
            }
            else if(result[0].pass!=data.pass){
                response={
                    status:"ERR",
                    err_code:"WRONG_PASS"
                }
            }
            else{
             response={
                status:"OK"
             }
                }
                res.send(JSON.stringify(response));
          }
})
    })
});
app.post('/publish',(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    })
    req.on("end",()=>{
        data=JSON.parse(data);
     
      let sql=`insert into blogss(author,blog,title) values('`
      +data.author+
      `','`+data.blog+
      `','`+data.title+`')`;
      console.log(data.edit+" "+data.edit==true);
      if(data.edit==true){
        sql=`update blogss set title='`+data.title+
        `',blog='`+data.blog+`' where blogID=`+data.blogID+`;`;
      }
      con.query(sql,(err,result)=>{
          if(err) {
             res.send(JSON.stringify(
              {
                  status:"ERR",
                  err_code:err.code

              
              }
             ))
          }
          else{
              res.send(JSON.stringify(
                  {
                      status:"OK"
                  }
              ))
          }
})
    })
});
app.post('/retrieve',(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    })
    req.on("end",()=>{
        data=JSON.parse(data);
      
      let sql=`select blog,title from blogss where blogID=`+data.blogID+`;`;
      con.query(sql,(err,result)=>{
          if(err) {
             res.send(JSON.stringify(
              {
                  status:"ERR",
                  err_code:err.code

              
              }
             ))
          }
          else{
            let response;
            if(result[0]==undefined){
                response={
                    status:"ERR",
                    err_code:"DNE"
                }
            }
        
            else{
             response={
                status:"OK",
                blog:result[0].blog,
                title:result[0].title
             }
                }
                res.send(JSON.stringify(response));
          }
})
    })
});
app.post('/list',(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    })
    req.on("end",()=>{
        data=JSON.parse(data);
        let sql=`select blogID,author,title from blogss;`;
        console.log(data.author=="");
        console.log(data.author);
        console.log(data);
        if(data.author!=""){
            sql=`select blogID,title,author from blogss where author='`+data.author+
            `';`
        }
    
    let blogIDs=[];
    let authors=[];
    let titles=[];
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            res.send(JSON.stringify({
                status:"ERR",
                err_code:err.code
            }));
        }
        else{
        console.log(result);
        result.map((res)=>{
            blogIDs.push(res.blogID);
            authors.push(res.author);
            titles.push(res.title);
        })
         res.send(JSON.stringify(
            {
                status:"OK",
                blogIDs:blogIDs,
                authors:authors,
                titles:titles
            }
         ))
        
    }
    })
})
})
app.post("/delete",(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
         data+=dt;
    })
    req.on("end",()=>{
        data=JSON.parse(data);
        let sql=`delete from blogss where blogID=`+data.blogID+`;`;
        con.query(sql,(err,result)=>{
            if(err){
                console.log(err);
                res.send(
                    JSON.stringify(
                        {
                            status:"ERR",
                            err_code:err.code
                        }
                    )
                )
            }
            else{
                res.send(
                    JSON.stringify(
                        {
                            status:"OK"
                        }
                    )
                )
            }
        })
    })
})
app.listen(8080);