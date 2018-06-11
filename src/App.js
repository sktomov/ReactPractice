import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
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
    const style = {
      backgroundColor : 'green',
      color: 'white',
      cursor: 'pointer',
      padding: '8px',
      border: '1px solid blue',
      font: 'inherit'
    };

    let persons = null;

    if(this.state.showNames){
      persons= (
        <div>
        {this.state.persons.map((person, index) => 
          {return <Person 
            click={() => this.deleteNameHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => this.switchNameHandler(event, person.id)} /> 
        })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = ['red', 'bold'].join(' ');

    return (
      <div className="App">
        <h1>Hi I'm React app</h1>
        <p className={classes}>Cool</p>
        <button style={style}
         onClick={this.showNamesHandler}>Toggle Name</button>
         {persons}
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Nice a?'));
  }
}

export default App;
