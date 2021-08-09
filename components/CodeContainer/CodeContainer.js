import {React, useEffect, useState} from 'react'

import CodeLine from '../CodeLine/CodeLine'

import styles from "./CodeContainer.module.css"

function CodeContainer(props) {
    function transformToLines(text) {
        return text.split("\n")
    }

    const [Lines, setLines] = useState([])

    useEffect(() => {
        setLines(transformToLines(props.text))
    })

    return (
        <div>
            <h3 className={styles.languageName}>{props.language}</h3>
            <div className={styles.container}>
                <pre>
                   <code>
                        {props.text}
                    </code> 
                </pre>
            </div>
        </div>
    )
}

export default CodeContainer
