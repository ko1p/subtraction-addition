import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styles from './App.module.css';
import CountingList from '../CountingList/CountingList';
import Login from '../Login/Login';
import { PageNotFound } from '../PageNotFound/PageNotFound';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/" exact><Login /></Route>
          <Route path="/counting" exact><CountingList /></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;