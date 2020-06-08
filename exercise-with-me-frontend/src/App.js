import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import RoutinesContainer from './containers/RoutinesContainer'
import ExercisesContainer from './containers/ExercisesContainer'
import ExerciseList from '././components/ExerciseList'


class App extends React.Component{



  render(){
    return (
      <div className="App">
      <header className="App-header">
        <p>
        </p>
        <RoutinesContainer/>
        <ExercisesContainer/>
        <ExerciseList/>

      </header>
    </div>
  );
  }
}

export default App;
