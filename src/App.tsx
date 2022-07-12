import React from 'react';
import './App.css';
import { Footer } from './component/Footer/Footer';
import { Logo } from './component/Logo/Logo';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content} />
      <Footer />
    </div>
  );
}

export default App;
