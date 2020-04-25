import React, { useState, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import HomePage from './components/home/HomePage';
import Login from './components/login/Login';
import { LanguageContext } from './context/LanguageContext';
import { UserContext } from './context/UserContext';
import AccountPage from './components/accountPage/AccountPage';

const App = () => {
  const [currentLanguage, setLanguage] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={AccountPage} />
          </Switch>
        </div>
      </LanguageContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
