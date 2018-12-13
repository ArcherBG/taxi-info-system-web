import React from 'react';

export default class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cars: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/composite/tataldrivendistance')
      .then(res => res.json())
      .then((result) => {
        console.log('result: ', result);
        this.setState({
          isLoaded: true,
          cars: result,
        });
      }, (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return (<div><h5>Loading...</h5></div>);
    } else if (this.state.error) {
      return (<div><h5>Error: {this.state.error.message}</h5></div>);
    } else {
      const cars = this.state.cars;
      return (
        <div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>№</th>        
                <th>Brand</th>
                <th>Model</th>
                <th>Registration Number</th>
                <th>Total driven distance</th>
              </tr>
            </thead>
            <tbody>{
              cars.map((car, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.registration_number}</td>
                  <td>{car.total}</td>
                </tr>
              ))
            }</tbody>
          </table>
        </div>
      );
    }
  }
}