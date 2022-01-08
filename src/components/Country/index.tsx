import React from "react";
import { useQuery } from "react-query";
import { getSupportedCodes } from "../../services/codes";

type propsType = {};

function Country(props: propsType) {
  const { data: codes } = useQuery("getCodes", getSupportedCodes);

  if (!codes?.length) return <p>Loading</p>;

  return (
    <form>
      <select>
        {codes.map((details: Array<string>) => (
          <option key={details[0]} value={details[0]}>{details[1]}</option>
        ))}
      </select>
    </form>
  );
}

export default Country;