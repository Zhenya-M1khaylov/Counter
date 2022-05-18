import React from 'react';


type UniversalButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
    buttonStyle?: string
}

const UniversalButton = (props: UniversalButtonPropsType) => {

   const onClickHandler = () => {
       props.callBack()
   }

    return (
        <span>
            <button disabled={props.disabled} onClick={onClickHandler} className={props.buttonStyle}>{props.name}</button>
        </span>
    );
};

export default UniversalButton;