import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//mount

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//case#1 running on developement and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//case#2 running on the container so we should export the mount function
export { mount };
