import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My First Next App</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
      </ul>
    </div>
  )
}
