import React, { useState } from "react";
import { CountryType } from "./types";
import axios from 'axios';
const App = () => {
  const [datas, setDatas] = useState<CountryType[]>([]);

  const getDatas = async() => {
    const {data} = axios.get("https://restcountries.com/v3.1/all");

  }
  return (
    <div>
    
    </div>
  );
};

export default App;
