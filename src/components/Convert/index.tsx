import React from 'react'
import { useQuery } from "react-query";
import { getSupportedCodes } from "../../services/codes";
import { converterPair } from '../../services/converter';

import BlueButton from '../BlueButton';
import Country from '../Country';
import AmountInput from '../AmountInput';


function Convert () {
    const [fromCountry, setFromCountry] = React.useState<String[]>(["AED","UAE Dirham"]);
    const [toCountry, setToCountry] = React.useState<String[]>(["AFN","Afghan Afghani"]);
    const [amount, setAmount] = React.useState<number>(1);
    const [currency, setCurrency] = React.useState<String>('');


    const { data: codes, isLoading } = useQuery("getCodes", getSupportedCodes);

    const onPress = () => {
        const data = {
            fromCountry: fromCountry[0],
            toCountry: toCountry[0],
            amount
        };

        converterPair(data)
            .then(res => setCurrency(`${res.conversion_result}`))
        
    };

    React.useEffect(() => {
        
    }, []);


    return (
        <section className='container'>
            <div className='options-container'>
                <AmountInput
                    amount={amount}
                    setAmount={setAmount}
                />

                <Country
                    isLoading={isLoading}
                    country={fromCountry}
                    setCountry={setFromCountry}
                    countries={codes}
                />

                <Country
                    isLoading={isLoading}
                    country={toCountry}
                    setCountry={setToCountry}
                    countries={codes}
                />
            </div>

            <div className='box-button'>
                <BlueButton
                    onPress={onPress}
                    isLoading={false}>
                        Calcular
                </BlueButton>
            </div>

            <span className='currency-box'>
                <p className='currency'>{currency && currency}</p>
            </span>

        </section>
    );
};

export default Convert;