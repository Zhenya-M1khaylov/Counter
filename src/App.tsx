import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter';
import {Setter} from './Components/Setter';

function App() {
    // for counter
    const [counterValue, setCounterValue] = useState<number>(0) // число счетчика
    const [startValue, setStartValue] = useState<number>(0) // начальное значение
    const [isDisabledInc, setIsDisabledInc] = useState(false)  // делает кнопку Inc задизейбленой
    const [isDisabledReset, setIsDisabledReset] = useState(false) // делает кнопку Reset задизейбленой

    // for setter
    const [isDisabledSet, setIsDisabledSet] = useState(false) // делать кнопку Set задизейбленой
    const [maxValue, setMaxValue] = useState<number>(10) // максимальное значение
    const [changedInput, setChangedInput] = useState(false) //если ввели новые значения в инпут
    const [errorInput, setErrorInput] = useState(false) //если ввели некорректные числа

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
            <Counter
                counterValue={counterValue}
                setCounterValue={setCounterValue}
                startValue={startValue}
                isDisabledInc={isDisabledInc}
                setIsDisabledInc={setIsDisabledInc}
                isDisabledReset={isDisabledReset}
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
    );
}

export default App;
