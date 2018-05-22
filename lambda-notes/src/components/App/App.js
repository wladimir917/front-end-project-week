import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './App.css';
import Nav from '../Nav/Nav';
import NotesList from '../Note/NotesList';
import NoteForm from '../Note/NoteForm';
import ViewNote from '../Note/ViewNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : true,
      notes: [
        {
          id: 1,
          title: "The standard Lorem Ipsum passage, used since the 1500s",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 3,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 4,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 5,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 6,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Nav />
        {!this.state.show && <NotesList notes={this.state.notes} />}
        {this.state.show && <NoteForm header="Create New Note:" button="Save" />}
        {!this.state.show && <ViewNote note={this.state.notes[0]}/>}
      </div>
    );
  }
}

export default App;
