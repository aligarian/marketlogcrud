import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux';


import {updateUser} from './actions/user-actions';

class App extends Component {
  constructor(props){
    
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);

  }
  onUpdateUser(e){
    e.preventDefault();

    this.props.onUpdateUser(document.getElementById('searchText').value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src="assets/img/marketlogic-logo.png" className="App-logo" alt="logo" />
          <input name="searchText" id="searchText" type="text"/>
           <button onClick={this.onUpdateUser}>Update user</button>
        </header>
        <p className="App-intro">
          To get started, edit src /App.js and save to reload.
        </p>
        <div>
        
       {this.props.users[0].name}
        
        </div>
      </div>
    );
  }
};
const mapsStateToProps = state =>({
  users:state.users
});
const mapsActionToProps = {
  onUpdateUser:updateUser
}
export default connect(mapsStateToProps,mapsActionToProps)(App);
