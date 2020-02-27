export default (state = {}, action) => {
  switch (action.type) {
  case 'TURN-SWITCH':
    const { idOfSquare } = action;

    let currentPlayer = (state.xIsNext ? 'X' : 'O');

    let historyLength = (state.history.length - 1);

    let lastHistory = state.history[historyLength][historyLength].squares;

    let newHistory = lastHistory.map((e, index) => {
      if (index === action.idOfSquare) {
        return currentPlayer;
      } else {
        return e;
      }
    });

    let newStepNumber = (state.history.length);

    let newHistoryObject = {[newStepNumber]: {squares: newHistory}};


    let mergeHistory = (state.history).concat(newHistoryObject);


    // switch bool for next turn:
    let newXIsNext = !state.xIsNext;
    // Count which stepNumber:

    console.log('You\'re welcome! \n 🌸 🌼 🌺 \n ~Noah');

    let newState = Object.assign({}, state, {
      history: mergeHistory,
      xIsNext: newXIsNext,
      stepNumber: newStepNumber,
    });
    return newState;
  default:
    return state;
  }
};
