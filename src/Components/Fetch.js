import { useState } from "react/cjs/react.development";
import Chart from "./Chart";

function Fetch() {
  const [prices, setPrices] = useState([""]);
  let name, mainPrices = [], pricing = [];
  function onChangeHandler(event) {
    name = event.target.value;
  }

  function onClickHandler(event) {
    event.preventDefault();
    
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" +
        name +
        "&apikey=***********"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        pricing = data["Monthly Adjusted Time Series"];
        let year = 2017;
        while (year <= 2020) {
          for (const [key] of Object.entries(pricing)) {
            if (key == "" + year + "-04-30" || key == "" + year + "-06-30") {
              mainPrices.push(Number(pricing[key]["1. open"]));
              break;
            }
          }
          year++;
        }
      })
      .catch((err) => {
        if (mainPrices.length < 4) {
          alert("Your data could not be loaded, try again please");
        }
      });
    setPrices(mainPrices);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the stock name"
        onChange={onChangeHandler}
      ></input>
      <button class="button btn btn-success" onClick={onClickHandler}>
        Submit!
      </button>
      <Chart data = {prices}/>
    </div>
  );
}

export default Fetch;
