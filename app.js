import React from 'react';
import ReactDOM from 'react-dom';

import Buttons from './components/Buttons'
import LoadingBar from './components/LoadingBar'

const App = () => {
  return (
    <div>
      <LoadingBar />
      <Buttons />
    </div>
  )
};


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

