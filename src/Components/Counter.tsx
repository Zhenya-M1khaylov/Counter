import React from 'react';
import UniversalButton from './UniversalButton';
import g from '../App.module.css'

type CounterPropsType = {
    counterValue: number
    setCounterValue: (number: number) => void
    startValue: number
    isDisabledInc: boolean
    setIsDisabledInc: (isDisabled: boolean) => void
    isDisabledReset: boolean

    // counterValue: number //
    // setCounterValue: (number: number) => void //
    // startValue: number //
    // maxValue: number
    // changedInput: boolean
    // setChangedInput: (isChanged: boolean) => void
    // errorInput: boolean
    // setErrorInput: (isError: boolean) => void
    // isDisabledInc: boolean //
    // setIsDisabledInc: (isDisabled: boolean) => void //
    // isDisabledReset: boolean //
    // setIsDisabledReset: (isDisabled: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const incValueHandler = () => {
        props.setCounterValue(props.counterValue + 1)
    }
    const resetValueHandler = () => {
        props.setCounterValue(props.startValue)
        props.setIsDisabledInc(false)
    }


    return (
        <div>
            <div>
                <span>
                    {props.counterValue}
                </span>
            </div>
            <div>
                <UniversalButton
                    name={'inc'}
                    callBack={incValueHandler}
                    disabled={props.isDisabledInc}
                />
                <UniversalButton
                    name={'reset'}
                    callBack={resetValueHandler}
                    disabled={props.isDisabledReset}
                />
            </div>
        </div>
    );
};

