import UserInput from "./Components/UserInput";
import { Bar } from "react-chartjs-2";
import ReactDOM from "react-dom";

var state;
function Display(a, b, c, d) {
  console.log(a);
  ReactDOM.render(
    <Bar
      data={
        (state = {
          labels: ["2020", "2019", "2018", "2017"],
          datasets: [
            {
              label: "Prices",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [a, b, c, d],
            },
          ],
        })
      }
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
    />,
    document.getElementById("root1")
  );
}

function App() {
  var array = [];
  function addStockHandler(stock) {
    array = stock;
    let a = array[0],
      b = array[1],
      c = array[2],
      d = array[3];
    Display(a, b, c, d);
  }

  return (
    <div>
      <UserInput onAddStock={addStockHandler}></UserInput>
    </div>
  );
}

export default App;
