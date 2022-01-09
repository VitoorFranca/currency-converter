import React from 'react';

type Props = {
    isLoading: Boolean,
    children: React.ReactNode,
    onPress: Function
};

function BlueButton ({ children, onPress }: Props) {
    return (
        <button onClick={() => onPress()}>{ children }</button>
    )
};

export default BlueButton;