import React, { useEffect, useState } from 'react'

import styles from "../../styles/Account.module.css"

import Navbar from '../../components/Navbar/Navbar'

export default function Account() {

    const [api_key, setKey] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        updateKeyAndEmail()
    })

    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <h1 className={styles.title}>Account</h1>
            <div className={styles.contentDiv}>
                <h2 className={styles.subTitle}>General Account Information</h2>
                <ul className={styles.list}>
                    <li><p>API key:</p><p>{api_key}</p></li>
                    <li><p>Email:</p><p>{email}</p></li>
                </ul>
                <h2 className={styles.subTitle} style={{color: "#C23535"}}>Dangerous Zone</h2>
                <button className={styles.dangerBtn} onClick={logout}>Logout</button>
                <button className={styles.dangerBtn}>DELETE ACCOUNT</button>
            </div>
        </div>
    )
    function updateKeyAndEmail() {
        const storage = window.localStorage
        setKey(storage.getItem("api_key"))
        setEmail(storage.getItem("email"))
    }
    function logout() {
        const storage = window.localStorage
        storage.setItem("api_key", "")
        storage.setItem("email", "")
        updateKeyAndEmail()
    }
}
