import MiniSignal from 'mini-signals';
import React from 'react';

// used to dispatch signals to this component from other components
export const progressLoaderSignal = new MiniSignal();

export class LoadingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.changeDisplay = this.changeDisplay.bind(this);
    //add signal listener
    this.binding = progressLoaderSignal.add(this.changeDisplay);
  }

  changeDisplay(bool) {
    this.setState({
      show: bool
    });
  }

  componentWillUnmount() {
    this.binding.detach();
  }

  render() {
    let inlineStyle = (this.state.show === false) ? {display:'none'} : {};

    return (
      <progress style={inlineStyle}>Loading...</progress>
    )
  }
}
