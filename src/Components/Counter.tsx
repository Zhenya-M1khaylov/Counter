import React from 'react';
import UniversalButton from './UniversalButton';
import c from '../App.module.css'

type CounterPropsType = {
    counterValue: number
    setCounterValue: (number: number) => void
    startValue: number
    isDisabledInc: boolean
    setIsDisabledInc: (isDisabled: boolean) => void
    isDisabledReset: boolean
    changedInput: boolean
    setChangedInput: (isChanged: boolean) => void
    errorInput: boolean
    setErrorInput: (isError: boolean) => void
    maxValue: number
    setIsDisabledReset: (isDisabled: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const incValueHandler = () => {
        props.setCounterValue(props.counterValue + 1)
    }
    const resetValueHandler = () => {
        props.setCounterValue(props.startValue)
        props.setIsDisabledInc(false)
    }

    const spanClass = `
    ${!props.changedInput && c.CountValueView}
    ${props.counterValue === props.maxValue ? c.maxValueErrorText : ''}
    ${props.changedInput && c.InvalidInputErrorText}
    ${props.errorInput && c.InvalidInputErrorText}
    `

    return (
        <div className={c.mainForm}>
            <div className={c.dataForm}>
                <span className={spanClass}>
                    {!props.errorInput && !props.changedInput && props.counterValue}
                    {!props.errorInput && props.changedInput && 'Set the value'}
                    {props.errorInput && 'Invalid input'}
                </span>
            </div>
            <div className={c.buttonForm}>
                <UniversalButton
                    buttonStyle={`${c.button} ${props.isDisabledInc && c.buttonDisabled}`}
                    name={'inc'}
                    callBack={incValueHandler}
                    disabled={props.isDisabledInc}
                />
                <UniversalButton
                    buttonStyle={`${c.button} ${props.isDisabledReset && c.buttonDisabled}`}
                    name={'reset'}
                    callBack={resetValueHandler}
                    disabled={props.isDisabledReset}
                />
            </div>
        </div>
    );
};

