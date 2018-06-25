import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }


  state = {
    persons : [
      {id: 1, name:'le6o', age:'30'},
      {id: 2, name:'kaligula', age:'30'},
      {id: 3, name:'perni6kiq', age:'30'}
    ],
    showNames : false
  }

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = [...this.state.persons[personIndex]];
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  showNamesHandler = () => {
    const doesShow = this.state.showNames;
    this.setState({showNames: !doesShow});
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;

    if(this.state.showNames){
      persons= (
        <div>
          <Persons persons={this.state.persons} clicked={this.deleteNameHandler} changed={this.switchNameHandler} />
        </div>
      );
    }

    return (
        <div className={classes.App}>
            <Cockpit title={this.props.title} persons={this.state.persons} showNamesHandler={this.showNamesHandler} showNames={this.state.showNames} />
           {persons}
        </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Nice a?'));
  }
}

export default App;
