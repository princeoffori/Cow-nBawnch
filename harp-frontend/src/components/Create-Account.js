import { Component } from 'react';
import { TextField } from '@material-ui/core/Button'

class CreateAccount extends Component {
    constructor(props) {
        super()
            
    }
    render() {
        return(
            <>
                <form>
                    <h5>Sign Up</h5>
                    <div class="container">
                                <input type="text" class="control form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/><br />
                                <input type="password" class="control form-control" placeholder="Password"/><br />
                                <input type="text" className="control form-control" id="firstname-input" placeholder="First Name"/><br />
                            <div className="row row-cols-lg-auto g-3 align-items-center">
                                <input  className="form-control" type="text" placeholder="MI" style={{width: 4 + 'em'}}/>&nbsp;
                                <input className="form-control" id="lastname-input" type="text" placeholder="Last Name" style={{width: 27 + 'em'}}/>
                            </div><br />
                        <div className="row row-cols-lg-auto g-3 align-items-center">
                            <select className="form-control" name="grade" id="grade" style={{width: 4 + 'em'}}>
                                <option value="E-1">E-1</option>
                                <option value="E-2">E-2</option>
                                <option value="E-3">E-3</option>
                                <option value="E-4">E-4</option>
                                <option value="E-5">E-5</option>
                                <option value="E-6">E-6</option>
                                <option value="E-7">E-7</option>
                                <option value="E-8">E-8</option>
                                <option value="E-9">E-9</option>
                                <option value="W-1">W-1</option>
                                <option value="W-2">W-2</option>
                                <option value="W-3">W-3</option>
                                <option value="W-4">W-4</option>
                                <option value="W-5">W-5</option>
                                <option value="O-1">O-1</option>
                                <option value="O-2">O-2</option>
                                <option value="O-3">O-3</option>
                                <option value="O-4">O-4</option>
                                <option value="O-5">O-5</option>
                                <option value="O-6">O-6</option>
                                <option value="O-7">O-7</option>
                                <option value="O-8">O-8</option>
                                <option value="O-9">O-9</option>
                                <option value="O-10">O-10</option>
                                <option value="null">N/A</option>
                            </select>
                            <input className="form-control" type="text" placeholder="Military Email"/>
                        </div><br />
                    </div>
                        <div id="user-info">
                            <button onClick>Submit</button>
                        </div>
                </form>
            </>
        )
    }
}

export default CreateAccount