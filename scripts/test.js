process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();

// Configure Enzyme adapter before tests
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// Configure JSDOM for Enzyme mount
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);