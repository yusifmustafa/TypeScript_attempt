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
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setDatas(data);
    } catch {
      console.log("Api'den data gelen zaman xeta emele geldi");
    }
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
