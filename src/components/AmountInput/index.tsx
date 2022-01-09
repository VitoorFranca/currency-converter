import React, { ChangeEvent } from 'react';

type Props = {
    amount: number,
    setAmount: Function
};

function AmountInput ({ amount, setAmount }: Props) {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value)
    };

    return (
        <input ref={inputRef} onChange={handleChange} value={amount} type="number"/>
    );
};

export default AmountInput