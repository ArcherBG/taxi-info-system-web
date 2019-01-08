import React from 'react';

export default class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orders: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/orders')
      .then(res => res.json())
      .then((result) => {
        console.log('result: ', result);
        this.setState({
          isLoaded: true,
          orders: result,
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
      const orders = this.state.orders;
      return (
        <div>
          <table className="table table-bordered inventory-table table-striped">
            <thead>
              <tr>
                <th>№</th>
                <th>StartTime</th>
                <th>Distance</th>
                <th>Bill</th>
                <th>City</th>
                <th>Street</th>
                <th>Street number</th>
                <th>Driver first name</th>
                <th>Driver last name</th>
                <th>Driver egn</th>
                <th>License valid to</th>
                <th>Experience in days</th>
                <th>Taxi number</th>
                <th>Registration number</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Passenger seats</th>
                <th>Big boot</th>
                <th>MOT expiration</th>
              </tr>
            </thead>
            <tbody>{
              orders.map((order, index) => (
                <tr key={order.orderId}>
                  <td>{index}</td>
                  <td>{order.startTime}</td>
                  <td>{order.distance}</td>
                  <td>{order.bill}</td>
                  <td>{order.city}</td>
                  <td>{order.street}</td>
                  <td>{order.street_number}</td>
                  <td>{order.first_name}</td>
                  <td>{order.last_name}</td>
                  <td>{order.egn}</td>
                  <td>{order.license_valid.slice(0, 10)}</td>
                  <td>{order.experience_in_days}</td>
                  <td>{order.taxi_number}</td>
                  <td>{order.registration_number}</td>
                  <td>{order.brand}</td>
                  <td>{order.model}</td>
                  <td>{order.passenger_seats}</td>
                  <td>{order.big_boot? "Yes" : "No"}</td>
                  <td>{order.mot_expiration.slice(0, 10)}</td>
                </tr>
              ))
            }</tbody>
          </table>
        </div>
      );
    }
  }
}