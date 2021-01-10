import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route />
        </Switch>
      </>
    </Router>

  );
};

export default App;
