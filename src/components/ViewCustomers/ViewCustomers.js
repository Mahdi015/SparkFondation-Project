import React, { useState, useEffect } from "react";
import { getCustomers } from "../../function/customers";
import CustomerTable from "./CustomerTable.";
import "./ViewCustomers.css";
import ReactCountryFlag from "react-country-flag";

const ViewCustomers = ({ history }) => {
  const [data, setdata] = useState("");
  const [finalData, setfinalData] = useState([]);
  const creatData = () => {
    let createdData = [];
    data.map((d) => {
      const { name, email, currentBalance, country, phone } = d;
      console.log(name, email, currentBalance, country, phone);
      createdData.push({
        name: (
          <a
            style={{ color: "#262a2e", textDecoration: "none" }}
            href={`viewcustomer/${name}`}
          >
            {name}
          </a>
        ),
        email,
        currentBalance,
        country: (
          <>
            {country}{" "}
            <ReactCountryFlag
              countryCode={country}
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />
          </>
        ),
        phone,
      });
    });
    setfinalData(createdData);
  };
  const fetchData = () => {
    getCustomers().then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    data && creatData();
  }, [data]);
  return (
    <div className="viewcustomers">
      <CustomerTable finalData={finalData} />
    </div>
  );
};

export default ViewCustomers;
