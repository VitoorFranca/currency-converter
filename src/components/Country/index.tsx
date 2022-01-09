import React from "react";


type Props = {
  countries: Array<[]> | undefined,
  country: String[],
  setCountry: Function,
  isLoading: Boolean
};

type CountryDetailsProps = String[];

function Country({ countries, country, setCountry }: Props) {
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const onSelectCountry = () => {
    if(!selectRef.current?.selectedIndex) return
    setCountry(countries && countries[selectRef.current?.selectedIndex]);

  };

  if(!countries) return <p>Loading</p> 

  return (
    <form>
      <select onChange={() => onSelectCountry()} ref={selectRef}>
        {countries.map((CountryDetails: Array<CountryDetailsProps>, i) => (
          <option key={i}>{CountryDetails[0]} - {CountryDetails[1]}</option>
        ))}
      </select>
    </form>
  );
}

export default Country;