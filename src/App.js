import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OrdersTable from "./components/OrdersTable";
import AllOrdersAfterDateForRegistrationNumber from "./components/AllOrdersAfterDateForRegistrationNumber/AllOrdersAfterDateForRegistrationNumber";
import TotalDrivenDistanceForAllCars from "./components/TotalDrivenDistanceForAllCars";
import AllOrdersMadeWithInvalidLicense from "./components/AllOrdersMadeWithInvalidLicense";
import MostExperiencedDriver from "./components/MostExperiencedDriver/MostExperiencedDriver";
import TotalBillForDriverComponent from "./components/TotalBillForDriverComponent/TotalBillForDriverComponent";
import CreateCarComponent from "./components/CreateCarComponent/CreateCarComponent";
import UpdateOrderComponent from "./components/UpdateOrderComponent/UpdateOrderComponent";

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div style={{'margin-left': '2em'}}>
      <nav>
        <div>GET Requests</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders/">Orders</Link>
          </li>
          <li>
            <Link to="/composite/tataldrivendistance/">Total driven distance for all cars</Link>
          </li>
          <li>
            <Link to="/composite/orderswithinvalidlicense/">All orders made with invalid License</Link>
          </li>
        </ul>

        <div>POST Requests</div>
        <ul>
          <li>
            <Link to="/composite/ordersforcar/">All orders after date for given registration number</Link>
          </li>
          <li>
            <Link to="/composite/mostexperienceddriver/">Most experienced driver</Link>
          </li>
          <li>
            <Link to="/composite/totalbill/">Total bill for driver</Link>
          </li>
          <li>
            <Link to="/composite/createcar/">Create car</Link>
          </li>
        </ul>
        <div>PUT Requests</div>
        <ul>
          <li>
            <Link to="/composite/updateorder/">Update order</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/orders/" component={OrdersTable} />
      <Route path="/composite/tataldrivendistance/" component={TotalDrivenDistanceForAllCars} />
      <Route path="/composite/orderswithinvalidlicense/" component={AllOrdersMadeWithInvalidLicense} />
      <Route path="/composite/ordersforcar/" component={AllOrdersAfterDateForRegistrationNumber} />
      <Route path="/composite/mostexperienceddriver/" component={MostExperiencedDriver} />
      <Route path="/composite/totalbill/" component={TotalBillForDriverComponent} />
      <Route path="/composite/createcar/" component={CreateCarComponent} />
      <Route path="/composite/updateorder/" component={UpdateOrderComponent} />
    </div>
  </Router>
);

export default AppRouter;