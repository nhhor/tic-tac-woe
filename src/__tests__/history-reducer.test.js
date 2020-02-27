import historyReducer from './../reducers/history-reducer';

describe('historyReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });


  test('Something should happen when a new turn occurs', () => {

    const initialState = {
      history: [{0: {squares: [null,null,null,null,null,null,null,null,'noah']}}],
      stepNumber: 0,
      xIsNext: true,
    }

    let idOfSquare = 1

    let action = {
      type: 'TURN-SWITCH',
      idOfSquare: idOfSquare,
    }

    let state;
    expect(historyReducer(initialState, action)).toEqual({});
  });




});
