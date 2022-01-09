import React from 'react'
import { useQuery } from "react-query";
import { getSupportedCodes } from "../../services/codes";

import BlueButton from '../BlueButton';
import Country from '../Country';

function Convert () {
    const [fromCountry, setFromCountry] = React.useState<String[]>(["AED","UAE Dirham"]);
    const [toCountry, setToCountry] = React.useState<String[]>(["AFN","Afghan Afghani"]);


    const { data: codes, isLoading } = useQuery("getCodes", getSupportedCodes);

    const onPress = () => {
        
    };


    return (
        <>
            <Country
                isLoading={isLoading}
                country={fromCountry}
                setCountry={setFromCountry}
                countries={codes} />

            <Country
                isLoading={isLoading}
                country={toCountry}
                setCountry={setToCountry}
                countries={codes} />

            <BlueButton onPress={onPress} isLoading={false}>Calcular</BlueButton>
        </>
    );
};

export default Convert;