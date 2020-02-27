import historyReducer from './../reducers/history-reducer';

describe('historyReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });


  test('Recuder should return a correct updated state after initialization', () => {

    const initialState = {
      history: [{0: {squares: [null,null,null,null,null,null,null,null,null]}}],
      stepNumber: 0,
      xIsNext: true,
    };

    let idOfSquare = 1;

    let action = {
      type: 'TURN-SWITCH',
      idOfSquare: idOfSquare,
    };

    expect(historyReducer(initialState, action)).toEqual({
      'history': [
        {'0': {'squares': [null,null,null,null,null,null,null,null,null,],},},
        {'1': {'squares': [null,'X',null,null,null,null,null,null,null,],},},
      ],
      'stepNumber': 1,
      'xIsNext': false,
    });
  });

  test('Something should happen when a new turn occurs', () => {

    const initialState = {
      history: [{0: {squares: [null,null,null,null,null,null,null,null,null]}}],
      stepNumber: 0,
      xIsNext: true,
    };

    let idOfSquare = 1;

    let action = {
      type: 'TURN-SWITCH',
      idOfSquare: idOfSquare,
    };

    expect(historyReducer(initialState, action)).toEqual({
      'history': [
        {'0': {'squares': [null,null,null,null,null,null,null,null,null,],},},
        {'1': {'squares': [null,'X',null,null,null,null,null,null,null,],},},
      ],
      'stepNumber': 1,
      'xIsNext': false,
    });
  });

  test('Something should happen when a new turn occurs', () => {

    const initialState = {
      history: [{0: {squares: [null,null,null,null,null,null,null,null,null]}}],
      stepNumber: 0,
      xIsNext: true,
    };

    let idOfSquare = 1;

    let action = {
      type: 'TURN-SWITCH',
      idOfSquare: idOfSquare,
    };

    let firstTurn = historyReducer(initialState, action);

    let newIdOfSquare = 8;

    let newAction = {
      type: 'TURN-SWITCH',
      idOfSquare: newIdOfSquare,
    };

    expect(historyReducer(firstTurn, newAction)).toEqual({
      'history': [
        {'0': {'squares': [null,null,null,null,null,null,null,null,null,],},},
        {'1': {'squares': [null,'X',null,null,null,null,null,null,null,],},},
        {'2': {'squares': [null,'X',null,null,null,null,null,null,'O',],},},
      ],
      'stepNumber': 2,
      'xIsNext': true,
    });
  });

});
