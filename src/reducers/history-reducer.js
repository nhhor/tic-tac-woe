export default (state = {}, action) => {
  switch (action.type) {
    case 'TURN-SWITCH':
    const { idOfSquare } = action;
    console.log('STATE is: ', state);
    console.log('ACTION is: ', action);




console.log('state.history IS: ', state.history);




    let newTurn = state.xIsNext ? 'X' : 'O'
    console.log('newTurn is: ', newTurn);

    let squares = [null, null, null, null, null, null, null, null, null]
    console.log('SQUARES WAS: ', squares);
    squares[action.idOfSquare] = newTurn;
    console.log('SQUARES IS!!!!!: ', squares);

    let history = state.history
    console.log('history is: ', history);


    console.log('action.idOfSquare is: ', action.idOfSquare);
    console.log('state.history.length is: ', state.history.length);

    // switch bool for next turn:
    let newXIsNext = !state.xIsNext

    let newState = Object.assign({}, state, {
      ['new']: {
        history: history,
        xIsNext: newXIsNext,
        id: idOfSquare,
      }
    });
    console.log(idOfSquare);
    return newState;
    default:
    return state;
  }
};
