import {expect} from 'chai';
import jsdom from 'mocha-jsdom'
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {loadingBarSignal, LoadingBar} from '../components/LoadingBar';

describe('Loading Bar Component', function () {
  jsdom();

  before(function () {
    this.component = TestUtils.renderIntoDocument(<LoadingBar />);
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it('should not visible by default', function () {
    expect( this.renderedDOM().getAttribute('style').replace(/ /g,'') ).to.contain('display:none');
    expect(this.component.state.show).to.be.false;
  });

  it('should be able to update visibility by sending a signal', function () {
    loadingBarSignal.dispatch(true);
    expect( this.renderedDOM().getAttribute('style').replace(/ /g,'') ).to.not.contain('display:none');
    expect(this.component.state.show).to.be.true;

    loadingBarSignal.dispatch(false);
    expect( this.renderedDOM().getAttribute('style').replace(/ /g,'') ).to.contain('display:none');
    expect(this.component.state.show).to.be.false;
  });
});
