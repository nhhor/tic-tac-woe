import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

const render = (Component) => {
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
};

render(Game);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/Game', () => {
    render(Game);
  });
}
/*eslint-enable */
