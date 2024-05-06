import ReactDOM from 'react-dom/client';
import App from './App';
import "./main.scss";



import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './Redux/store';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>


);