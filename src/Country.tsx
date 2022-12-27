 import React, { FunctionComponent } from 'react';
import { CountryType } from './types';

 interface ICountryType{
    country:CountryType;
 }
 
 const Country:FunctionComponent<ICountryType> = (props) => {
    const {country} = props;
   return (
     <div>
        {
           <p>{country.car.side}</p>
        }
     </div>
   )
 }
 
 export default Country;