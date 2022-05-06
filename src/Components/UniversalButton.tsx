import React from 'react';
import s from '../App.module.css'

type UniversalButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

const UniversalButton = (props: UniversalButtonPropsType) => {

   const onClickHandler = () => {
       props.callBack()
   }

    return (
        <span>
            <button disabled={props.disabled} onClick={onClickHandler} className={s.button}>{props.name}</button>
        </span>
    );
};

export default UniversalButton;