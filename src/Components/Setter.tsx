import React, {ChangeEvent} from 'react';
import UniversalButton from './UniversalButton';
import c from '../App.module.css';

type setterPropsType = {
    startValue: number //
    setStartValue: (number: number) => void //
    maxValue: number //
    setMaxValue: (number: number) => void //
    setCounterValue: (number: number) => void //
    changedInput: boolean
    setChangedInput: (isChanged: boolean) => void //
    isDisabledSet: boolean //
    setIsDisabledSet: (isDisabled: boolean) => void //
    errorInput: boolean
    setErrorInput: (isError: boolean) => void
}

export const Setter = (props: setterPropsType) => {

    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setChangedInput(true)
        props.setIsDisabledSet(false)
        props.setStartValue(JSON.parse(e.currentTarget.value))

    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setCounterValue(0)
        props.setMaxValue(+e.currentTarget.value)
    }

    const sendStartInputToCounterHandler = () => {
        props.setCounterValue(props.startValue)
        props.setChangedInput(false)
        props.setIsDisabledSet(true)
    }


    return (
        <div className={c.mainForm}>
            <div className={c.dataForm}>
                <label className={c.formLabel}>
                    <span className={c.spanForm_text}>max value</span>
                    <input
                        type='number'
                        onChange={onChangeMaxInputHandler}
                        value={props.maxValue}
                        className={`${c.form_input} ${props.errorInput && c.inputFormErrorValue}`}
                    />
                </label>
                <label className={c.formLabel}>
                    <span className={c.spanForm_text}>start value</span>
                    <input
                        type='number'
                        onChange={onChangeStartInputHandler}
                        value={props.startValue}
                        className={`${c.form_input} ${props.errorInput && c.inputFormErrorValue}`}
                    />
                </label>
            </div>
            <div className={c.buttonForm}>
                <UniversalButton
                    buttonStyle={`${c.button} ${props.isDisabledSet && c.buttonDisabled}`}
                    name={'set'}
                    callBack={sendStartInputToCounterHandler}
                    disabled={props.isDisabledSet}
                />
            </div>
        </div>
    );
};
