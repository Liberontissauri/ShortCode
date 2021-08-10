import React from 'react'

import styles from "../../styles/NewCode.module.css"

import Navbar from '../../components/Navbar/Navbar'
import CodeInput from "../../components/CodeInput/CodeInput"

export default function NewCode(props) {
    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.contentDiv}>
                <CodeInput text={props.content} language={props.language}></CodeInput>
            </div>
        </div>
    )
}
