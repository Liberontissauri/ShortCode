import React, { useState } from 'react'
import Link from 'next/link'

import styles from "../../styles/Login.module.css"

import NavBar from "../../components/Navbar/Navbar"
import {toast, Toaster} from 'react-hot-toast'
import axios from 'axios'
import ShortButton from '../../components/ShortButton/ShortButton'

export default function Signup() {
    const [emailValue, setEmailValue] = useState("")
    const [keyValue, setKeyValue] = useState("")

    //There is probably a lot of better solutions to this, so it should be changed later
    const api_server_url = "http://localhost:5000"
    //

    return (
        <div className={styles.background}>
            <Toaster
            toastOptions={{
                className:"",
                style: {
                    color:"#fff",
                    fontFamily:"'Hind Vadodara', sans-serif",
                    backgroundColor: "#3d3d3d",
                }
            }}
            />
            <NavBar></NavBar>
            <div className={styles.formDiv}>
                <h2 className={styles.title}>Sign Up</h2>
                <Link href="/account/login">
                    <h3 className={styles.subTitle}>Or Login</h3>
                </Link>
            </div>
            <div className={styles.formDiv}>
                <input placeholder="Email" onInput={e => setEmailValue(e.target.value)}></input>
            </div>
            <div className={styles.formDiv}>
                <ShortButton text="Sign Up" onClick={initSignUp} size="big" type="normal"></ShortButton>
            </div>
        </div>
    )
    function handleError(err) {
        if(err.response.data.type == "InvalidInput") toast.error(err.response.data.message)
        if(err.response.data.type == "DuplicateContent") toast.error(err.response.data.message)        

        return false
    }
    async function initSignUp() {
        const key = await axios.post(`${api_server_url}/apikeys`, {
            email: emailValue
        })
                        .catch(err => handleError(err))
        if(!key) return

        const storage = window.localStorage
        storage.setItem("api_key", key.data.api_key)
        storage.setItem("email", key.data.email)
        
        toast.success("Logged in Successfully!")
    }
}
