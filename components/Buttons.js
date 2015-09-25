import React from 'react';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Show loading bar</button>
        <button>Hide loading bar</button>
      </div>
    )
  }
}
