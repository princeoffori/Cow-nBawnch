import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import Issue from './components/Issue'
import Receive from './components/Receive'
import Close from './components/Close'
import Login from './components/Login'



import CreateAccount from './components/Create-Account'

class App extends Component {

  constructor() {
    super();
    this.state = {
      issue: [],
      receive: []
    }
    this.addItem = this.addItem.bind(this)
    this.issueReceipt = this.issueReceipt.bind(this)
    this.resetIssue = this.resetIssue.bind(this)


  }

  addItem(){

    const itemNSN = document.getElementById('itemNSN').value;
    const nomenclature = document.getElementById('nomenclature').value;
    const serialNum = document.getElementById('serialNum').value;
    const unit = document.getElementById('unit').value;
    const qty = document.getElementById('qty').value;

    const newIssue = [...this.state.issue]

    newIssue.push({
      itemNSN: itemNSN, 
      nomenclature: nomenclature, 
      serialNum: serialNum, 
      unit: unit, 
      qty: qty})

  
    this.setState({...this.state, issue: newIssue})
  }

  issueReceipt(){

    const username = document.getElementById("username").value;

    const newReceive = [...this.state.receive]
    newReceive.push({username: username, receipt: this.state.issue})
    this.setState({...this.state, receive: newReceive})
  }

  resetIssue(){
    this.setState({...this.state, issue: []})
  }

  render() {
    return (
      <div className="App">

        <Router>
          <header className="App-header">
            <h1 id="page-title">Hand Receipt Portal</h1>
            <h6 id="page-title">(HaRP System)</h6>
            <h6 id="page-slogan">Property Accountability Simplified for You</h6>
            <Link to="/">
                {/* <input type="image" src="./images/homeicon.png" /> */}
                  <img id="home-btn" width="30px" src="https://www.stonybrook.edu/commcms/studentaffairs/res/_images/home_icon.png" />
            </Link>
            {/* <img src={homeicon}/> */}

          </header>
          <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <Home resetIssue={this.resetIssue}/>
                  {console.log(this.state.receive)}
                </Route>

                <Route path="/login">
                 <Login />
                </Route>
                
                <Route path="/create-account">
                  <CreateAccount />
                </Route>

                <Route path="/issue">
                  <Issue issueReceipt={this.issueReceipt} addItem={this.addItem} issue={this.state.issue}/>
                </Route>

                <Route path="/receive">
                  <Receive />
                </Route>

                <Route path="/close">
                  <Close />
                </Route>

              </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;


