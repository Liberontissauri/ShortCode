import styles from '../styles/Home.module.css'
import ShortHero from '../components/ShortHero/ShortHero'

export default function Home() {
  return (
    <div className={styles.container}>
      <ShortHero></ShortHero>
    </div>
  )
}
