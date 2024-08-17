import React, { useEffect, useState } from 'react';
import styles from "./EvenOdd.module.scss";

function EvenOdd() {
    const [randomInc, setRandomInc] = useState({ countValue: 0, countType: 'Even' })

    const handleIncrement = () => {
        const randomNumber = Math.floor(Math.random() * 101);
        setRandomInc({ ...randomInc,countValue: randomInc.countValue + randomNumber })
    }

    useEffect(() => {
        const constType = randomInc.countValue % 2 === 0 ? 'Even' : 'Odd';
        setRandomInc({ ...randomInc, countType: constType })
    }, [randomInc])

    return (
        <div className={styles.appBg}>
            <div className={styles.appContent}>
                <h1>Count {randomInc.countValue}</h1>
                <div className={styles.subContent}>
                    <p>Count is {randomInc.countType}</p>
                    <button onClick={handleIncrement}>Increment</button>
                    <span>*Increase By Random Number Betweeen 0 to 100</span>
                </div>
            </div>
        </div>
    )
}

export default EvenOdd