import './assets/styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';

import stores from './stores/stores';
import Routes from './components/routes/routes';

render(
  <AppContainer>
    <Provider {...stores}>
      <Routes />
    </Provider>
  </AppContainer>,
  document.querySelector('#app')
);

// Enables hot-reload without page refresh. Removed during `build`
if(module.hot){
  module.hot.accept();
}
