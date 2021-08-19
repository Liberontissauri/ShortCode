import axios from 'axios'
import {React, useEffect, useState} from 'react'
import router from 'next/router'

import styles from "./CodeInput.module.css"
import ShortButton from '../ShortButton/ShortButton'

function CodeContainer(props) {
    const [Title, setTitle] = useState("")
    const [Language, setLanguage] = useState("")
    const [Code, setCode] = useState("")

    useEffect(()=>{
        const storage = window.localStorage
        if(!storage.getItem("email") || !storage.getItem("api_key")) {
            router.push("/account/login")
        }
    })

    return (
        <div>
            <input className={styles.inputSmall} placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
            <input className={styles.inputSmall} placeholder="Language" onChange={(e) => setLanguage(e.target.value)}></input>
            <textarea placeholder="Code" type="text" className={styles.container} spellCheck="false"  onChange={(e) => setCode(e.target.value)}>
                
            </textarea>
            <ShortButton text="Submit Post" onClick={createPost} size="big" type="normal"></ShortButton>
        </div>
    )
    async function createPost() {
        const storage = window.localStorage
        const SERVER_URL = "http://localhost:5000"
        const res = await axios.post(`${SERVER_URL}/codes`, {
            keyId: storage.getItem("api_key"),
            title: Title,
            code: Code,
            language: Language
        })
    }
}

export default CodeContainer
