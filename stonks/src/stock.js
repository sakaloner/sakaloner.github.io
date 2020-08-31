import React from 'react';

class Stock extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            stockChartXValues:  [],
            stockChartYValues:  []

    }
}

componentDidMount(){
    this.fetchStock();
}

fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = '05YIQJ15L0CNQB7G';
    let StockSymbol = 'FB';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);
          for (var key in data['Time Series (Daily)']) {
              stockChartXValuesFunction.push(key)
          }
        }
      ) 

    
}
    render() {
        return (
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}
export default Stock;