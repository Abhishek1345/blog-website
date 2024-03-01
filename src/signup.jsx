//import './form.css';
import Navbar from './navbar.jsx';
function SignUp(){
    
    return(
        <>
        <Navbar/>
        <div className="formPage">
        <h1>Blogger Web</h1>
     <div className="form">
        <h1>Sign up</h1>
        <p id="typing"></p>
       <div className="input"> <input type="text" id="name" required/>
        <label className="name">Name</label>
    </div>
    <div className="input">
        <input type="text" id="email" required/>
        <label className="email">Email</label>
    </div>
    <div className="input">
        <input type="password" id="password" required/>
        <label className="pass">
            password
     </label></div> 
<button className="submit">submit</button>
<label className="LoginMessage">Already have an account? <a href="login">Login</a></label>
</div>
</div>
</>
    );
}

export default SignUp;