'use strict';

describe('StirlingApp', () => {
  let React = require('react/addons');
  let StirlingApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    StirlingApp = require('components/StirlingApp.js');
    component = React.createElement(StirlingApp);
  });

  it('should create a new instance of StirlingApp', () => {
    expect(component).toBeDefined();
  });
});
