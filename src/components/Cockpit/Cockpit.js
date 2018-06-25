import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if(props.persons.length <= 2){
      assignedClasses.push( classes.red );
    }
    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold );
    }
    if(props.showNames){
        btnClass = classes.Red;
    }

    return(
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>Cool</p>
          <button className={btnClass}
           onClick={props.showNamesHandler}>Toggle Name</button>
        </div>
    );
}

export default cockpit;