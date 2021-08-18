import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from "../../styles/Login.module.css"

import NavBar from "../../components/Navbar/Navbar"
import {toast, Toaster} from 'react-hot-toast'
import axios from 'axios'
import ShortButton from '../../components/ShortButton/ShortButton'

export default function Login() {
    const router = useRouter()
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
                <h2 className={styles.title}>Login</h2>
                <Link href="/account/signup">
                    <h3 className={styles.subTitle}>Or Sign up</h3>
                </Link>
                
            </div>
            <div className={styles.formDiv}>
                <input placeholder="API key" onInput={e => setKeyValue(e.target.value)}></input>
            </div>
            <div className={styles.formDiv}>
                <ShortButton text="Login" onClick={initLogin} size="big" type="normal"></ShortButton>
            </div>
        </div>
    )
    function handleError(err) {
        if(err.response.data.type == "InvalidInput") toast.error(err.response.data.message)

        return false
    }
    async function initLogin() {
        const key = await axios.get(`${api_server_url}/apikeys/${keyValue}`)
                        .catch(err => handleError(err))
        if(!key) return

        const storage = window.localStorage
        storage.setItem("api_key", key.data.key_id)
        storage.setItem("email", key.data.email)
        
        toast.success("Logged in Successfully!")
    }
}
