import { Bar } from "react-chartjs-2";
import { useState } from "react/cjs/react.development";

function Chart(props) {
  const [prices, setPrices] = useState();
  function onClickHandler() {
    if (props.data == "") {
      alert("Please submit the stock you want to display the prices for!");
    } else {
      setPrices(props.data);
    }
  }
  return (
    <div>
      <button class="btn btn-outline-info" onClick={onClickHandler}>
        Display!
      </button>
      <Bar
        data={{
          labels: ["2017", "2018", "2019", "2020"],
          datasets: [
            {
              label: "Prices",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [
                props.data[0],
                props.data[1],
                props.data[2],
                props.data[3],
              ],
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Stock Price History",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default Chart;
