import React, { useEffect, useState } from "react";

import Axios from "../../lib/axios";
import Error from "../../components/Error/index";
import "./index.css";

const NBPExchangeRatesURL = "http://api.nbp.pl/api/exchangerates/tables/A";

export default function Currency() {
  const [error, setError] = useState(null);
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    Axios.get(NBPExchangeRatesURL).then((response) => {
      if (response.data[0]) {
        setCurrencies(response.data[0]);
      }
    }).catch(() => {
      setError(true);
    });
  }, []);

  if (!currencies && !error) {
    return "LOADING";
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="currency-page">
      <h2 className="currency-page__header">Dane kursów walut NBP z tabeli {currencies.table}</h2>
      <table className="currency-page__table">
        <tr className="currency-page__table__row">
          <th className="currency-page__table__row__col" style={{ width: "60%" }}>Waluta</th>
          <th className="currency-page__table__row__col" style={{ width: "20%" }}>Kod</th>
          <th className="currency-page__table__row__col" style={{ width: "20%" }}>Kurs średni</th>
        </tr>
        {currencies.rates.map((rate) => {
          return (
            <tr className="currency-page__table__row">
              <th className="currency-page__table__row__col" style={{ width: "60%" }}>{rate.currency}</th>
              <th className="currency-page__table__row__col" style={{ width: "20%" }}>{rate.code}</th>
              <th className="currency-page__table__row__col" style={{ width: "20%" }}>{rate.mid}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}