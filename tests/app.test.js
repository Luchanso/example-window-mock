/* global it, describe, expect */

const WindowMock = require('window-mock').default;
const app = require('../app.js');

describe('test jest and window mock', () => {
  it('Some window interaction unit test', () => {
    const window = new WindowMock();

    window.localStorage.setItem('key', 'value');

    app(window);

    expect(
      window.localStorage.getItem('key'),
    ).toEqual('value');
  });
});
