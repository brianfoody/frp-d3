'use strict';

describe('ChartStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/ChartStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
