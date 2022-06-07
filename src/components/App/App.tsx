import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
// import CountingList from '../CountingList/CountingList';
// import Login from '../Login/Login';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import Login  from '../Login/Login';
import CountingList from "../CountingList/CountingList";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counting" element={<CountingList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
