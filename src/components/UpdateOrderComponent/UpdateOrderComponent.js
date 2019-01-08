import React from 'react';
import styles from './styles.css';

export default class UpdateOrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      result: 0
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    const taxiNumber = event.target.taxiNumber.value;
    const distance = event.target.distance.value;
    const bill = event.target.bill.value;
    fetch('http://localhost:3000/api/orders', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: taxiNumber,
        distance: distance,
        bill: bill,
      })
    }).then(res => res.json())
      .then((result) => {
        console.log('result: ', result);
        this.setState({
          isLoaded: true,
          result: result.affectedRows,
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
    } else if(this.state.result > 0){
      return (<div><h5>Record is updated </h5></div>);  
    } else {
      return (
        <div>
          <form onSubmit={this.submitForm}>
            <div>
              <label>Registration Number</label>
              <input type="text" name="taxiNumber" />
            </div>
            <div>
              <label>Distance traveled</label>
              <input type="text" name="distance" />
            </div>
            <div>
              <label>Bill</label>
              <input type="text" name="bill" />
            </div>
            <div>
              <button type="submit" >Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }
}