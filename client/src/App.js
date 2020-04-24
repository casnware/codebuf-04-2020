import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import HomePage from './components/home/HomePage';
import Login from './components/login/Login';
import { LanguageContext } from './context/LanguageContext';

const App = () => {
  const [currentLanguage, setLanguage] = useState(null);
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
