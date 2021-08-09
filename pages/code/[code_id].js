import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import axios from 'axios'

import styles from "../../styles/CodeID.module.css"

import Navbar from '../../components/Navbar/Navbar'
import CodeContainer from '../../components/CodeContainer/CodeContainer'

export default function code_id(props) {
    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.contentDiv}>
                <CodeContainer text={props.content} language={props.language}></CodeContainer>
            </div>
        </div>
    )
}

function handleError(err) {
    
}

export async function getServerSideProps(context) {
    const {code_id} = context.params
    const SERVER_URL = "http://localhost:5000"
    const res = await axios.get(`${SERVER_URL}/codes/${code_id}`).catch(handleError)

    return {
        props: {
            title: res.data.title,
            content: res.data.code,
            language: res.data.lang
        }
    }
}