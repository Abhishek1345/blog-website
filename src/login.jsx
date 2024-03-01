import './form.css';
import ReactDOM from 'react-dom/client';
import SignUp from './signup';
import Navbar from './navbar';

function Login(){
    const rerender=()=>{
       const root=ReactDOM.createRoot(document.getElementById("root"));
       root.render(<SignUp/>);
    }
    return(
        <>
        <Navbar/>
        <h1>Blogger Web</h1>
        <div className="form">
            <h1>Login</h1>
        <div className="input"> <input type="text" id="email" required/>
            <label className="name">Email</label>
        </div>
        <div className="input">
        <input type="password" id="password" required/>
        <label className="pass">
            password
     </label></div>
     <button className="submit">Login</button>
     <label className="LoginMessage">Don't have an account? <a href="signup" onClick={rerender}>Sign Up</a></label>
    </div>
    </>
    );
}
export default Login;