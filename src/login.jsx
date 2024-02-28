import './form.css';
import ReactDOM from 'react-dom/client';
import SignUp from './signup';

function Login(){
    const rerender=()=>{
       const root=ReactDOM.createRoot(document.getElementById("root"));
       root.render(<SignUp/>);
    }
    return(
        <>
        <h1>Blogger Web</h1>
        <div class="form">
            <h1>Login</h1>
        <div class="input"> <input type="text" id="email" required/>
            <label class="name">Email</label>
        </div>
        <div class="input">
        <input type="password" id="password" required/>
        <label class="pass">
            password
     </label></div>
     <button class="submit">Login</button>
     <label className="LoginMessage">Don't have an account? <a href="signup" onClick={rerender}>Sign Up</a></label>
    </div>
    </>
    );
}
export default Login;