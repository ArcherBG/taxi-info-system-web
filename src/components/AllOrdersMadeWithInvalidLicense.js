import React from 'react';

export default class AllOrdersMadeWithInvalidLicense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orders: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/composite/orderswithinvalidlicense')
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
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>№</th>
                <th>Start time</th>
                <th>Distance</th>
                <th>License valid To</th>
              </tr>
            </thead>
            <tbody>{
              orders.map((order, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{order.startTime}</td>
                  <td>{order.distance}</td>
                  <td>{order.license_valid}</td>
                </tr>
              ))
            }</tbody>
          </table>
        </div>
      );
    }
  }
}