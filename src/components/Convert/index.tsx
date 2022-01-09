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


    const { data: codes, isLoading } = useQuery("getCodes", getSupportedCodes);

    const onPress = () => {
        const data = {
            fromCountry: fromCountry[0],
            toCountry: toCountry[0],
            amount
        };

        //const query = useQuery("converter", async () => converterPair(data));

        converterPair(data)
            .then(res => console.log(res))
        
        //console.log(query)
    };

    React.useEffect(() => {
        
    }, []);


    return (
        <>
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

            <BlueButton
                onPress={onPress}
                isLoading={false}>
                    Calcular
            </BlueButton>
        </>
    );
};

export default Convert;