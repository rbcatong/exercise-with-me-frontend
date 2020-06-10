export const deleteExercise = (exerciseId) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/routines', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(exercise => dispatch({
      type: 'DELETE_EXERCISE',
      payload: exerciseId
    }))
  }
}
