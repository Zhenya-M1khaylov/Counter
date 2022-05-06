import React, {ChangeEvent} from 'react';
import UniversalButton from './UniversalButton';

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
        <div>
            <div>
                <label>
                    <input
                        type='number'
                        onChange={onChangeMaxInputHandler}
                        value={props.maxValue}
                    />
                </label>
                <label>
                    <input
                        type='number'
                        onChange={onChangeStartInputHandler}
                        value={props.startValue}
                    />
                </label>
            </div>
            <div>
                <UniversalButton
                    name={'set'}
                    callBack={sendStartInputToCounterHandler}
                    disabled={props.isDisabledSet}
                />
            </div>
        </div>
    );
};
