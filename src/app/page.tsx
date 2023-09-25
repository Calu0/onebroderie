"use client"
import styles from './page.module.css'
import Header from './components/Header'

export default function Home() {
  return (    
  <div className="app">
    <Header />
    <main className={styles.main}>
    </main>
  </div>
  )
}
