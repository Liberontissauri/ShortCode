import React from 'react'
import styles from "./ShortHero.module.css"

import waves from "../../images/waves.png"
import ShortButton from '../ShortButton/ShortButton'

function ShortHero() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>Short Code</h1>
            <h3 className={styles.subTitle}>Share code quickly with anyone</h3>
            <ShortButton text="Start Sharing" size="big" type="normal"></ShortButton>
            <img className={styles.waves} alt="wave" src={waves.src}/>
        </div>
    )
}

export default ShortHero
