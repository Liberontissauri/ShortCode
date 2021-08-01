import React from 'react'
import styles from "./ShortHero.module.css"

import waves from "../../images/waves.png"

function ShortHero() {
    return (
        <div className={styles.background}>
            <img className={styles.waves} alt="wave" src={waves.src}/>
        </div>
    )
}

export default ShortHero
