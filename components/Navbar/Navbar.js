import React from 'react'
import styles from "./Navbar.module.css"
import Link from "next/link"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContent}>
                <Link href="/account"><a className={styles.navbarLink}>Account</a></Link>
                <Link href="/account/code"><a className={styles.navbarLink}>My Code</a></Link>
                <Link href="/"><a className={styles.mainLink}>Short Code</a></Link>
                <Link href="/code/new"><a className={styles.navbarLink}>Create Post</a></Link>
                <Link href="/about"><a className={styles.navbarLink}>About</a></Link>
            </div>
        </div>
    )
}

export default Navbar
