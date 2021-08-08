import React from 'react'

import styles from "./CodeContainer.module.css"

function CodeContainer(props) {
    function transformToLines(text) {
        return text.split("\n")
    }

    const [Lines, setLines] = useState(transformToLines(props.code))

    return (
        <div>
            <h3 className={styles.languageName}></h3>
            <div className={styles.container}>
                {Lines.map((line, index) => {
                    //return <CodeLine text={line} lineNumber={index}></CodeLine>
                })}
            </div>
        </div>
    )
}

export default CodeContainer
