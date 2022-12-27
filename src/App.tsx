import React, { useEffect, useState } from "react";
import { CountryType } from "./types";
import axios from "axios";
import Country from "./Country";
const App = () => {
  const [datas, setDatas] = useState<CountryType[]>([]);

  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = async () => {
    const { data } = await axios.get<CountryType[]>(
      "https://restcountries.com/v3.1/all"
    );
    setDatas(data);
  };
  return (
    <div>
      {datas.map((country) => {
        return <Country country={country} />;
      })}
    </div>
  );
};

export default App;
