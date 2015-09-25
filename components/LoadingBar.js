import React from 'react';

export default class LoadingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.style = {
      width: 'calc(100% - 20px)',
      margin: '0 10px 30px'
    }
  }

  render() {
    return (
      <progress style={this.style}>Loading...</progress>
    )
  }
}
