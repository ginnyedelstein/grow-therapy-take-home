import React, { useState } from "react";
import {
  Wrapper,
  Header,
  TableWrapper,
  InputCol,
  Input,
  Header2,
  Select,
  Submit,
} from "./Filters.css";
import { COUNTRIES } from "../constants/CountryCodes";

const Filters = ({ date, setDate, setResult }) => {
  const [numResults, setNumResults] = useState(100);
  const [country, setCountry] = useState();

  const getResults = async (query) => {
    let parsedDate = date.replace(/-/g, "/");
    try {
      let res = await fetch(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/${query}/all-access/${parsedDate}`,
        {
          method: "GET",
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        const cleanedRes = resJson.items[0].articles;
        setResult(JSON.stringify(Array(cleanedRes)[0].slice(0, numResults)));
      } else {
        setResult("empty");
      }
    } catch (err) {
      setResult("error");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ((country != null) & (country !== "")) {
      getResults(`top-per-country/${country}`);
    } else {
      getResults("top/en.wikipedia");
    }
  };

  const getDate = () => {
    var utc = new Date().toJSON().slice(0, 10);
    return String(utc);
  };

  return (
    <Wrapper>
      <Header>Filters</Header>
      <TableWrapper onSubmit={handleSubmit}>
        <InputCol>
          <Header2>Start Date:</Header2>
          <Input
            type="date"
            value={date}
            max={getDate()}
            min={"2001-01-15"} //birth of wikipedia
            onChange={(e) => setDate(e.target.value)}
          />
          <Header2>Number of Results:</Header2>
          <Select
            value={numResults}
            onChange={(e) => setNumResults(e.target.value)}
          >
            <option value={200}>200</option>
            <option value={100}>100</option>
            <option value={75}>75</option>
            <option value={50}>50</option>
            <option value={25}>25</option>
          </Select>
          <Header2>Countries:</Header2>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            {COUNTRIES.map((element) => (
              <option key={element.name} value={element.code}>
                {element.name}
              </option>
            ))}
          </Select>
          <Submit type="submit" value="Search" onClick={handleSubmit} />
        </InputCol>
      </TableWrapper>
    </Wrapper>
  );
};

export default Filters;
