import React from 'react';
import styles from './styles.css';

export default class CreateCarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      result: []
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    const taxiNumber = event.target.taxiNumber.value;
    const registrationNumber = event.target.registrationNumber.value;
    const brand = event.target.brand.value;
    const model = event.target.model.value;
    const passengerSeats = event.target.passengerSeats.value;
    const bigBoot = event.target.bigBoot.value;
    const motExpiration = event.target.motExpiration.value;
    fetch('http://localhost:3000/api/cars', {
      method: 'POST',
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify({
         taxiNumber: taxiNumber,
         registrationNumber: registrationNumber,
         brand: brand,
         model: model,
         passengerSeats: passengerSeats,
         bigBoot: bigBoot,
         motExpiration: motExpiration
         })
    }).then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          result: result,
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
      const result = this.state.result;
      return (
        <div>
          <form onSubmit={this.submitForm}>
            <div>
              <label>Taxi Number</label>
              <input type="text" name="taxiNumber" />
            </div>
            <div>
              <label>Registration Number</label>
              <input type="text" name="registrationNumber" />
            </div>
            <div>
              <label>Brand</label>
              <input type="text" name="brand" />
            </div>
            <div>
              <label>Model</label>
              <input type="text" name="model" />
            </div>
            <div>
              <label>Passenger Seats</label>
              <input type="text" name="passengerSeats" />
            </div>
            <div>
              <label>Big boot</label>
              <input type="text" name="bigBoot" />
            </div>
            <div>
              <label>MOT Expiration</label>
              <input type="text" name="motExpiration" />
            </div>
            <div>
              <button type="submit" >Submit</button>
            </div>
          </form>
          <table className="table table-bordered inventory-table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Total bill</th>        
               </tr>
            </thead>
            <tbody>{
              result.map((rez, index) => (
                <tr key={index}>
                  <td>{rez.first_name}</td>
                  <td>{rez.last_name}</td>
                  <td>{rez.tatalBill}</td>
                </tr>
              ))
            }</tbody>
          </table>
        </div>
      );
     }
  }
}