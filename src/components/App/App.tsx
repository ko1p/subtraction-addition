import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
// import CountingList from '../CountingList/CountingList';
// import Login from '../Login/Login';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import Login  from '../Login/Login';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counting" element={<h1>Counting</h1>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
