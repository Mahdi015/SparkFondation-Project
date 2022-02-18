import React from "react";
import "./App.css";
import {
  TransferMoneyPage,
  ViewCustomers,
  Navbar,
  Sidebar,
  Home,
  CustomerProfile,
  Footer,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <Navbar />

          <Sidebar />

          {/* <TransferMoney /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewallcustomers" element={<ViewCustomers />} />
            <Route path="/transfermoney" element={<TransferMoneyPage />} />
            <Route path="/viewcustomer/:slug" element={<CustomerProfile />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
