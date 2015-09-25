import React from 'react';
import {progressLoaderSignal} from './LoadingBar';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.displayProgressLoader = this.displayProgressLoader.bind(this);
  }

  displayProgressLoader(bool) {
    progressLoaderSignal.dispatch(bool);
  }

  render() {
    return (
      <div>
        <button onClick={this.displayProgressLoader.bind(this, true)}>Show loading bar</button>
        <button onClick={this.displayProgressLoader.bind(this, false)}>Hide loading bar</button>
      </div>
    )
  }
}
