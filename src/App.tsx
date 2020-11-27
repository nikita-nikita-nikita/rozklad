import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import Routing from "./containers/routing";

const App:React.FC = () => {
  return (
      <Provider store={store}>
        <main className="main-app">
            <Routing/>
        </main>
      </Provider>
  );
}

export default App;
