import React from 'react';
import {loadingBarSignal} from './LoadingBar';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.displayLoadingBar = this.displayLoadingBar.bind(this);
  }

  displayLoadingBar(bool) {
    loadingBarSignal.dispatch(bool);
  }

  render() {
    return (
      <div>
        <button onClick={this.displayLoadingBar.bind(this, true)}>Show loading bar</button>
        <button onClick={this.displayLoadingBar.bind(this, false)}>Hide loading bar</button>
      </div>
    )
  }
}
