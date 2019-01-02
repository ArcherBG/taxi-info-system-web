import React from 'react';
import styles from './styles.css';

export default class MostExperiencedDriver extends React.Component {
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
    const city = event.target.city.value;
    fetch('http://localhost:3000/api/composite/mostexperienceddriver', {
      method: 'POST',
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify({ city: city})
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
              <label>City</label>
              <input type="text" name="city" />
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
                <th>Egn</th>
                <th>Experience</th>        
                <th>License Expire</th>        
               </tr>
            </thead>
            <tbody>{
              result.map((rez, index) => (
                <tr key={index}>
                  <td>{rez.first_name}</td>
                  <td>{rez.last_name}</td>
                  <td>{rez.egn}</td>
                  <td>{rez.experience_in_days}</td>
                  <td>{rez.license_valid}</td>
                </tr>
              ))
            }</tbody>
          </table>
        </div>
      );
     }
  }
}