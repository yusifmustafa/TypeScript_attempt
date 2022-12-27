import React, { FunctionComponent } from "react";
import { CountryType } from "./types";

interface ICountryType {
  country: CountryType;
}

const Country: FunctionComponent<ICountryType> = (props) => {
  const { country } = props;
  return <div>{<p>{country.name.official}</p>}</div>;
};

export default Country;
