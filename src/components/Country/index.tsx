import React from "react";


type Props = {
  countries: Array<[]> | undefined,
  country: String[],
  setCountry: Function,
  isLoading: Boolean
};

type CountryDetailsProps = String[];

function Country({ countries, setCountry }: Props) {

  const onSelectCountry = (CountryDetails: Array<CountryDetailsProps>) => {
    setCountry(CountryDetails);

  };

  if(!countries) return <p>Loading</p> 

  return (
    <form>
      <select>
        {countries.map((CountryDetails: Array<CountryDetailsProps>, i) => (
          <option key={i} onClick={() => onSelectCountry(CountryDetails)}>{CountryDetails[0]} - {CountryDetails[1]}</option>
        ))}
      </select>
    </form>
  );
}

export default Country;