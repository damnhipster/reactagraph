'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactagraphApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactagraphApp = require('../../../src/scripts/components/ReactagraphApp.js');
    component = React.createElement(ReactagraphApp);
  });

  it('should create a new instance of ReactagraphApp', function () {
    expect(component).toBeDefined();
  });
});
