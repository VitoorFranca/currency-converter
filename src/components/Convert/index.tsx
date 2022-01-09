import React from 'react'
import { useQuery } from "react-query";
import { getSupportedCodes } from "../../services/codes";

import Country from '../Country';

function Convert () {
    const [fromCountry, setFromCountry] = React.useState<String[]>([]);
    const [toCountry, setToCountry] = React.useState<String[]>([]);


    const { data: codes } = useQuery("getCodes", getSupportedCodes);


    return (
        <>
            <Country
                country={fromCountry}
                setCountry={setFromCountry}
                contries={codes} />

            <Country
                country={toCountry}
                setCountry={setToCountry}
                contries={codes} />
        </>
    );
};

export default Convert;