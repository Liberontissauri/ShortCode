import { useRouter } from 'next/dist/client/router'
import React from 'react'

import styles from "../../styles/CodeID.module.css"

import Navbar from '../../components/Navbar/Navbar'
import CodeContainer from '../../components/CodeContainer/CodeContainer'

export default function code_id() {
    const router = useRouter()
    const { code_id } = router.query

    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <h1 className={styles.title}>Account</h1>
            <div className={styles.contentDiv}>
                <CodeContainer text={`print("hello world")\nfoo = 3`} language="javascript"></CodeContainer>
            </div>
        </div>
    )
}
