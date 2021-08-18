import React from 'react'
import styles from "./ShortButton.module.css"

function ShortButton(props) {
    function getSizeStyle(styles, size) {
        switch (size) {
            case "big":
                return styles.bigSize;
            case "small":
                return styles.smallSize;
            default:
                return styles.normalSize;
        }
    }
    function getTypeStyle(styles, type) {
        switch (type) {
            case "danger":
                return styles.dangerType;
            default:
                return styles.normalType;
        }
    }
    
    return (
        <div>
            <button onClick={props.onClick} className={`${styles.buttonBase} ${getSizeStyle(styles, props.size)} ${getTypeStyle(styles, props.type)}`}>{props.text}</button>
        </div>
    )
}

export default ShortButton
