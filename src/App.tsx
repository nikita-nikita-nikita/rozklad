import React, {useEffect, useState} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import Routing from "./containers/routing";
import Header from "./components/header";
import {BrowserRouter as Router} from "react-router-dom";
import GroupServiceContextProvider from "./api/context/groupContext";
import GroupService from "./api/services/groupService";

const App:React.FC = () => {
    // useEffect(()=>{setUser},[])
  return (
      <Provider store={store}>
          <GroupServiceContextProvider value={new GroupService()}>
              <main className="main-app">
                  <Router>
                      <Header/>
                      <Routing/>
                  </Router>
              </main>
          </GroupServiceContextProvider>
      </Provider>
  );
}

export default App;
