import { Component } from "react";

class Login extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <div class="container">
                    <form>
                        <input type="text" class="contol form-control" placeholder="Username"aria-label="Username" aria-describedby="basic-addon1" style={{width: 27 + 'em'}}/><br />
                        <input type="password" class="control form-control" placeholder="Password" style={{width: 27 + 'em'}}/>
                        <button class="btn btn-primary">Login</button><br />
                        Don't have an account? Make one here: <a class="control form-control" href="/create-account" className="create-account-button">Create Account</a>
                    </form>
                </div>
            </>
        )    
    }
}

export default Login
      