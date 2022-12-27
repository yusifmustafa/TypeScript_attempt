import React, { useEffect, useState } from "react";
import { CountryType } from "./types";
import axios from "axios";
import Country from "./Country";
import Loading from "./Loading";
const App = () => {
  const [datas, setDatas] = useState<CountryType[]>([]);
  console.log(datas);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setDatas(data);
    } catch {
      console.log("Api'den data gelen zaman xeta emele geldi");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Loading loading={loading}>
        {datas.map((country) => {
          return <Country key={country.name.official} country={country} />;
        })}
      </Loading>
    </div>
  );
};

export default App;
