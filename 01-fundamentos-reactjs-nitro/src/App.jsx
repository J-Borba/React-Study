import Axios from 'axios';
import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


import styles from './css/App.module.css'
import './css/global.css'

export function App() {
  
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main className={styles.main}>
          <Post />
          <Post />
        </main>

      </div>
    </div>
  )
}