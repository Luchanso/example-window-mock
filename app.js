/* global window */

let window;

const app = () => {
  console.log(window.localStorage.getItem('key'));
};

module.exports = (w) => {
  window = w;

  app();
};
