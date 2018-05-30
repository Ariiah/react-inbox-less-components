import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: this.props.emails
    }
  }



  render() {
    return (<div>
      <h1>React Inbox</h1>
      <Toolbar/>
      <MessageList emails={this.state.emails}/>
    </div>)
  }
}

export default App
