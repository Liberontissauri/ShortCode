import React from 'react'
import styles from "./ShortHero.module.css"

import waves from "../../images/waves.png"

function ShortHero() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>Short Code</h1>
            <h3 className={styles.subTitle}>Share code quickly with anyone</h3>
            <img className={styles.waves} alt="wave" src={waves.src}/>
        </div>
    )
}

export default ShortHero
