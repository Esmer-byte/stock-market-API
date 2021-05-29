function UserInput(props) {
  var name, mainPrices = [], chartPrices = [];
  var pricing = [];

  function onChangeHandler(event) {
    name = event.target.value;
  }

  function onClickHandler2() {
    window.location.reload();
  }

  function onClickHandler(event) {
    event.preventDefault();

    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=" +
        name +
        "&apikey=**********").then((response) => {
        return response.json();
      }).then((data) => {
        pricing = data["Monthly Adjusted Time Series"];
        var year = 2017;
        var OK1 = 0, OK2 = 0, OK3 = 0, OK4 = 0;
        for (const [key] of Object.entries(pricing)) {
          if ((key == "" + year + "-04-30" || key == "" + year + "-06-30") && OK1 == 0) {
            mainPrices.push(key.toString());
            OK1 = 1;
          }
          if ((key == "" + (year + 1) + "-04-30" || key == "" + (year + 1) + "-06-30") && OK2 == 0) {
            mainPrices.push(key.toString());
            OK2 = 1;
          }
          if ((key == "" + (year + 2) + "-04-30" || key == "" + (year + 2) + "-06-30") && OK3 == 0 ) {
            mainPrices.push(key.toString());
            OK3 = 1;
          }
          if ((key == "" + (year + 3) + "-04-30" || key == "" + (year + 3) + "-06-30") && OK4 == 0) {
            mainPrices.push(key.toString());
            OK4 = 1;
          }
        }
        var i = 0;
        while (i < 4) {
          var x = Number(pricing[mainPrices[i]]["1. open"]);
          chartPrices.push(x);
          i++;
        }
      });
    props.onAddStock(chartPrices);
  }

  return (
    <div>
      <form> 
        <input
          type="text"
          placeholder="Enter stock's name"
          onChange={onChangeHandler}
        ></input>
        <button onClick={onClickHandler}>Submit!</button>
        <button onClick={onClickHandler}>Display!</button>
        <button onClick={onClickHandler2}>RELOAD</button>
      </form>
    </div>
  );
}

export default UserInput;
