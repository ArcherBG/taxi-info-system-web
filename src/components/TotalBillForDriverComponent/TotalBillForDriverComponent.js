import React from 'react';
import styles from './styles.css';

export default class TotalBillForDriverComponent extends React.Component {
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
    const egn = event.target.egn.value;
    fetch('http://localhost:3000/api/composite/totalbillfordriver', {
      method: 'POST',
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify({ egn: egn})
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
              <label>Driver Egn</label>
              <input type="text" name="egn" />
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