//Matt's phone number: 520-559-4436

import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cookie from 'js-cookie'



import Home from './components/Home'
import Issue from './components/Issue'
import Receipt from './components/Receipt'

import Receive from './components/Receive'
import Close from './components/Close'
import Login from './components/Login'
import History from './components/BrowserHistory'



import CreateAccount from './components/Create-Account'



class App extends Component {

  constructor() {
    super();
    this.state = {
      issue: [],
      outstanding: [],
      receive: [{
        username: 'Tristan',
        id: 1,
        receipt: [{itemNSN: 123,
          nomenclature: 'test',
          serialNum: 456,
          unit: 'ea',
          qty: 69},
          {itemNSN: 789,
          nomenclature: 'test2',
          serialNum: 223,
          unit: 'ea',
          qty: 40}
        ]
      },
      {
        username: 'Anthony',
        id: 2,
        receipt: [{itemNSN: 123,
          nomenclature: 'not a test',
          serialNum: 456,
          unit: 'ea',
          qty: 69},
          {itemNSN: 789,
          nomenclature: 'test2',
          serialNum: 223,
          unit: 'ea',
          qty: 40}
        ]
      }],
      idCounter: 2,
    }
    this.addItem = this.addItem.bind(this)
    this.issueReceipt = this.issueReceipt.bind(this)
    this.resetIssue = this.resetIssue.bind(this)
    this.deleteReceive = this.deleteReceive.bind(this)



  }

  checkCookie(event) {
    event.preventDefault()
    if (document.cookie === "") {
      window.location.replace('/login')
    } else {
      window.location.replace('/')
    }
  }

  componentDidMount() {
    
    if (window.location.pathname !== '/login' && Cookie.get('username')) {
       window.location.replace('/login');
      }
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
    const newID = Number(this.state.idCounter) + 1
    newReceive.push({username: username, id: newID, receipt: this.state.issue})
    this.setState({...this.state, receive: newReceive, idCounter: newID}, this.resetIssue)
  }

  deleteReceive(itemId){
    const newReceive = [...this.state.receive]
    const index = newReceive.findIndex(receipt => receipt.id === Number(itemId))
    newReceive.splice(index, 1)
    this.setState({...this.state, receive: newReceive})
    
  }

  acceptReceive(itemId){
    const newOutstanding= [...this.state.outstanding]
    const index = this.state.receive.findIndex(receipt => receipt.id === Number(itemId))
    newOutstanding.push(this.state.receive[index])
    this.setState({...this.state, outstanding: newOutstanding})
    
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
                  {/* <img id="home-btn" width="30px" src="https://www.stonybrook.edu/commcms/studentaffairs/res/_images/home_icon.png" onClick={this.checkCookie}/> */}
                  <img id="home-btn" width="30px" src="https://www.stonybrook.edu/commcms/studentaffairs/res/_images/home_icon.png" />
            </Link>
            {/* <img src={homeicon}/> */}

          </header>
          <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <Home resetIssue={this.resetIssue}/>
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

                <Route exact path="/receive">
                  <Receive receive={this.state.receive}/>
                </Route>

                <Route exact path="/receive/:itemId">
                  <Receipt allReceipts={this.state.receive} deleteReceive={this.deleteReceive}/>
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


