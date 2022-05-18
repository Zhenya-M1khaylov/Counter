import React, {useEffect, useState} from 'react';
import c from './App.module.css'
import {Counter} from './Components/Counter';
import {Setter} from './Components/Setter';

function App() {

    const [counterValue, setCounterValue] = useState<number>(0) // number from counter
    const [startValue, setStartValue] = useState<number>(0) // start value
    const [isDisabledInc, setIsDisabledInc] = useState(false)  // button INC disabled
    const [isDisabledReset, setIsDisabledReset] = useState(false) // button RESET disabled
    const [isDisabledSet, setIsDisabledSet] = useState(false) // button SET disabled
    const [maxValue, setMaxValue] = useState<number>(10) //  max value
    const [errorInput, setErrorInput] = useState(false) // entered incorrect numbers
    const [changedInput, setChangedInput] = useState(false) // if input was changed


    useEffect(() => {
        const localStorageStartValue = localStorage.getItem('startValue')
        const localStorageMaxValue = localStorage.getItem('maxValue')
        if (localStorageStartValue) setStartValue(JSON.parse(localStorageStartValue))
        if (localStorageMaxValue) setMaxValue(JSON.parse(localStorageMaxValue))
    }, [])


    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))

        if (maxValue <= startValue) {
            setErrorInput(true)
            setIsDisabledSet(true)
        } else {
            setIsDisabledInc(false)
            setErrorInput(false)
            setChangedInput(true)
            setIsDisabledSet(false)
        }

        if (startValue < 0) {
            setErrorInput(true)
            setIsDisabledSet(true)
        }

    }, [maxValue, startValue])

    useEffect(() => {
        if (counterValue === maxValue) {
            setIsDisabledInc(true)
        }
    }, [counterValue, maxValue])


    return (
        <div className="App">
            <div className={c.container}>
                <Counter
                    counterValue={counterValue}
                    setCounterValue={setCounterValue}
                    startValue={startValue}
                    isDisabledInc={isDisabledInc}
                    setIsDisabledInc={setIsDisabledInc}
                    isDisabledReset={isDisabledReset}
                    changedInput={changedInput}
                    setChangedInput={setChangedInput}
                    errorInput={errorInput}
                    setErrorInput={setErrorInput}
                    maxValue={maxValue}
                    setIsDisabledReset={setIsDisabledReset}
                />
                <Setter
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    setCounterValue={setCounterValue}
                    changedInput={changedInput}
                    setChangedInput={setChangedInput}
                    isDisabledSet={isDisabledSet}
                    setIsDisabledSet={setIsDisabledSet}
                    errorInput={errorInput}
                    setErrorInput={setErrorInput}
                />
            </div>
        </div>
    );
}

export default App;
