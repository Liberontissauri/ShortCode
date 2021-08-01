import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import ShortHero from '../components/ShortHero/ShortHero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <ShortHero></ShortHero>
    </div>
  )
}
