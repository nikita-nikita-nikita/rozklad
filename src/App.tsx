import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import Routing from "./containers/routing";
import Header from "./components/header";
import {
    BrowserRouter as Router
} from "react-router-dom";

const App:React.FC = () => {
  return (
      <Provider store={store}>
        <main className="main-app">
            <Router>
                <Header/>
                <Routing/>
            </Router>
        </main>
      </Provider>
  );
}

export default App;
