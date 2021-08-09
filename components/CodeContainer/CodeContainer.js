import {React, useEffect, useState} from 'react'

import styles from "./CodeContainer.module.css"

function CodeContainer(props) {

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
