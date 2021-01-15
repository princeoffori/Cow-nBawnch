import { Component } from "react";
import history from './BrowserHistory'
import Cookie from 'js-cookie'

class Login extends Component {
    constructor(props) {
        super()
    }

    addUsernameCookie=() => {
        Cookie.set('username', 1)
        history.push('/')
    }


    render() {
        return (
            <>
                <div class="container">
                        <input id="usernameField" type="text" class="contol form-control" placeholder="Username"aria-label="Username" aria-describedby="basic-addon1" style={{width: 27 + 'em'}}/><br />
                        <input type="password" class="control form-control" placeholder="Password" style={{width: 27 + 'em'}}/>
                        <button class="btn btn-primary" onClick={() => this.props.login(document.getElementById('usernameField').value)}>Login</button><br />
                        Don't have an account? Make one here: <a class="control form-control" href="/create-account" className="create-account-button">Create Account</a>
                </div>
            </>
        )    
    }
}

export default Login
      

// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }

