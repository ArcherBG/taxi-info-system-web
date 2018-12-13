import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OrdersTable from "./components/OrdersTable";
import AllOrdersAfterDateForRegistrationNumber from "./components/AllOrdersAfterDateForRegistrationNumber";
import TotalDrivenDistanceForAllCars from "./components/TotalDrivenDistanceForAllCars";
import AllOrdersMadeWithInvalidLicense from "./components/AllOrdersMadeWithInvalidLicense";

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders/">Orders</Link>
          </li>
          {/* <li>
            <Link to="/composite/ordersforcar/">All orders after date for given registration number</Link>
          </li> */}
          <li>
            <Link to="/composite/tataldrivendistance/">Total driven distance for all cars</Link>
          </li>
          <li>
            <Link to="/composite/orderswithinvalidlicense/">All orders made with invalid License</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/orders/" component={OrdersTable} />
      <Route path="/composite/ordersforcar/" component={AllOrdersAfterDateForRegistrationNumber} />
      <Route path="/composite/tataldrivendistance/" component={TotalDrivenDistanceForAllCars} />
      <Route path="/composite/orderswithinvalidlicense/" component={AllOrdersMadeWithInvalidLicense} />
    </div>
  </Router>
);

export default AppRouter;