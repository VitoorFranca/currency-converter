import React from "react";


type Props = {
  contries: Array<[]> | undefined,
  country: String[],
  setCountry: Function
};

type CountryDetailsProps = Array<String>;

function Country({ contries, country, setCountry }: Props) {

  const onSelectCountry = (CountryDetails: Array<CountryDetailsProps>) => {
    setCountry(CountryDetails);

  };

  if (!contries?.length) return <p>Loading</p>;

  return (
    <form>
      <select>
        {contries.map((CountryDetails: Array<CountryDetailsProps>, i) => (
          <option key={i} onClick={() => onSelectCountry(CountryDetails)}>{country[0]} - {country[1]}</option>
        ))}
      </select>
    </form>
  );
}

export default Country;