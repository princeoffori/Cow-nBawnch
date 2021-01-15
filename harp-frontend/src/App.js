//Matt's phone number: 520-559-4436 <- Call for a good time

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
import CloseReceipt from './components/CloseReceipt'
import History from './components/BrowserHistory'



import CreateAccount from './components/Create-Account'



class App extends Component {

  constructor() {
    super();
    this.state = {
      issue: [],
      outstanding: [],
      receive: [{
        issuer: 'Anthony',
        username: 'Tristan',
        id: 1,
        receipt: [{itemNSN: '6620-00-621-2903',
          nomenclature: 'F/F Indicator',
          serialNum: 8675309,
          unit: 'ea',
          qty: 1},
          {itemNSN: '6615-01-426-5623',
          nomenclature: 'Luft Balloons',
          serialNum: 223,
          unit: 'ea',
          qty: 99}
        ]
      },
      {
        issuer: 'Prince',
        username: 'Anthony',
        id: 2,
        receipt: [{itemNSN: '5518-00-442-1197',
          nomenclature: '$1000 Bill',
          serialNum: 5896316,
          unit: 'ea',
          qty: 1},
          {itemNSN: '6610-00-125-5555',
          nomenclature: 'Milk Carton',
          serialNum: 'N/A',
          unit: '20',
          qty: 4}
        ]
      }],
      idCounter: 2,
      info: 'No Info',
      user: 'Nobody'
    }
    this.addItem = this.addItem.bind(this)
    this.issueReceipt = this.issueReceipt.bind(this)
    this.resetIssue = this.resetIssue.bind(this)
    this.deleteReceive = this.deleteReceive.bind(this)
    this.acceptReceive = this.acceptReceive.bind(this)
    this.closeOutstanding = this.closeOutstanding.bind(this)
    this.login = this.login.bind(this)
    this.clearItem = this.clearItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)



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

  
    this.setState({...this.state, issue: newIssue}, this.clearItem)
  }

  clearItem() {
    document.getElementById('itemNSN').value=''
    document.getElementById('nomenclature').value=''
    document.getElementById('serialNum').value=''
    document.getElementById('unit').value=''
    document.getElementById('qty').value='';
  }

  issueReceipt(){

    const username = document.getElementById("username").value;

    const newReceive = [...this.state.receive]
    const newID = Number(this.state.idCounter) + 1
    newReceive.push({username: username, issuer: this.state.user, id: newID, receipt: this.state.issue})
    this.setState({...this.state, receive: newReceive, idCounter: newID}, this.resetIssue)
  }

  deleteItem(index){

    let newIssue = [...this.state.issue]
    newIssue.splice(index, 1)
    this.setState({...this.state, issue: newIssue})
  }


  deleteReceive(itemId){
    const newReceive = [...this.state.receive]
    const index = newReceive.findIndex(receipt => receipt.id === Number(itemId))
    newReceive.splice(index, 1)
    let newInfo = this.state.info.slice()
    if(this.state.info !== 'You have accepted this receipt.'){
      newInfo = 'This receipt has been REJECTED!'
    }
    this.setState({...this.state, receive: newReceive, info: newInfo})
    
  }

  closeOutstanding(itemId){
    const newOutstanding = [...this.state.outstanding]
    const index = newOutstanding.findIndex(receipt => receipt.id === Number(itemId))
    newOutstanding.splice(index, 1)
    this.setState({...this.state, outstanding: newOutstanding, info: 'This receipt is now closed.'})
  }

  acceptReceive(itemId){
    const newOutstanding= [...this.state.outstanding]
    const index = this.state.receive.findIndex(receipt => receipt.id === Number(itemId))
    newOutstanding.push(this.state.receive[index])
    this.setState({...this.state, outstanding: newOutstanding, info: 'You have accepted this receipt.'}, () => this.deleteReceive(itemId))
  }

  resetIssue(){
    this.setState({...this.state, issue: [], info: 'No Info'}, this.clearItem)
  }

  login(username){
    this.setState({...this.state, user: username})
  }

  render() {
    return (
      <div className="App">

        <Router>
          <header className="App-header">
            <h1 id="page-title">Hand Receipt Portal</h1>
            <h5 id="page-title">(HaRP System)</h5>
            <h6 id="page-slogan">Property Accountability Simplified for You</h6>
            <div id="nav-buttons">

            <Link to="/login">
              <button className="btn btn-outline-light">Logged in as: {this.state.user}</button>
            </Link>
            <Link to="/">
                {/* <input type="image" src="./images/homeicon.png" /> */}
                  {/* <img id="home-btn" width="30px" src="https://www.stonybrook.edu/commcms/studentaffairs/res/_images/home_icon.png" onClick={this.checkCookie}/> */}
                  <img id="home-btn" width="30px" src="https://www.stonybrook.edu/commcms/studentaffairs/res/_images/home_icon.png" />
            </Link>
            </div>
            {/* <img src={homeicon}/> */}

          </header>
          <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <Home resetIssue={this.resetIssue}/>
                </Route>

                <Route path="/login">
                 <Login login={this.login}/>
                </Route>
                
                <Route path="/create-account">
                  <CreateAccount />
                </Route>

                <Route path="/issue">
                  <Issue deleteItem={this.deleteItem} issueReceipt={this.issueReceipt} addItem={this.addItem} issue={this.state.issue}/>
                </Route>

                <Route exact path="/receive">
                  <Receive receive={this.state.receive} user={this.state.user}/>
                </Route>

                <Route exact path="/receive/:itemId">
                  <Receipt allReceipts={this.state.receive} info={this.state.info} deleteReceive={this.deleteReceive} acceptReceive={this.acceptReceive}/>
                </Route>

                <Route exact path="/close">
                  <Close outstanding={this.state.outstanding} user={this.state.user}/>
                </Route>

                <Route exact path="/close/:itemId">
                  <CloseReceipt allReceipts={this.state.outstanding} info={this.state.info} closeOutstanding={this.closeOutstanding}/>
                </Route>

              </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;


