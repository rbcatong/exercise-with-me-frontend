import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'
import {connect} from 'react-redux'
import {fetchRoutines} from '../actions/fetchRoutines'



class RoutineList extends React.Component{

 constructor(props){
   super(props);
   this.state = { routines: props.routines }
  }



 static getDerivedStateFromProps(props, state){
   return {
     routines: props.routines
   }
 }

//do not have routines right away, get the new prop.
// because its async, we need to find a way to get the new props to update state

 handleVote = (routineId) => {
   // if routine id matches the button
  const updatedRoutine = this.state.routines.map(routine => {
    if (routine.id == routineId) {
      if (routine.votes) {
        console.log('1')
          routine.votes += 1
      } else {
        console.log('2')
        routine.votes = 1
      }
    }
  console.log('hi')
    return routine;
  })
  console.log('bye')
  this.setState({
    routines: updatedRoutine
  },console.log('ruff'))
  console.log('meow')
}

  render(){
    return (
      <div>
        <h1>Exercise Routines</h1>
        {this.props.routines.map(routine =>
          <div key={routine.id}>
            <Link to={`/routines/${routine.id}`}>{routine.title}</Link>
              <button type="button" onClick={() => this.handleVote(routine.id) } value={routine.id}>
                Vote
              </button>
              {routine.votes}
         </div>)}
      </div>
    )
  }
}

export default connect(null, {fetchRoutines})(RoutineList)
