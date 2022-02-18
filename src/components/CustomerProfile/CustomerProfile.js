import React, { useState, useEffect } from "react";
import TransferMoney from "../TransferMoney/TransferMoney";
import "./CustomerProfile.css";
import { useParams } from "react-router-dom";
import { getCustomer } from "../../function/customers";

const CustomerProfile = () => {
  const [customerInfo, setcustomerInfo] = useState([]);
  const [loadData, setloadData] = useState(false);
  const { slug } = useParams();
  const loadUserInfo = () => {
    getCustomer(slug).then((res) => {
      setcustomerInfo(res.data);
    });
  };
  useEffect(() => {
    loadUserInfo();
  }, [slug]);
  useEffect(() => {
    loadUserInfo();
  }, [loadData]);
  return (
    <div className="customerprofile">
      {customerInfo && customerInfo.length !== 0 && (
        <div className="profileinfo">
          <span style={{ marginBottom: "0.5rem" }}>
            <h5>
              Name:{" "}
              <span
                style={{
                  fontWeight: "100",
                  color: "#404040",
                  fontSize: "16px",
                }}
              >
                {customerInfo.name}
              </span>
            </h5>
          </span>
          <span style={{ marginBottom: "0.5rem" }}>
            <h5>
              Email:{" "}
              <span
                style={{
                  fontWeight: "100",
                  color: "#404040",
                  fontSize: "16px",
                }}
              >
                {customerInfo.email}
              </span>
            </h5>
          </span>
          <span style={{ marginBottom: "0.5rem" }}>
            <h5>
              Current Ballance:{" "}
              <span
                style={{
                  fontWeight: "100",
                  color: "#404040",
                  fontSize: "16px",
                }}
              >
                {customerInfo.currentBalance}$
              </span>
            </h5>
          </span>
          <span style={{ marginBottom: "0.5rem" }}>
            <h5>
              Phone:{" "}
              <span
                style={{
                  fontWeight: "100",
                  color: "#404040",
                  fontSize: "16px",
                }}
              >
                {customerInfo.phone}
              </span>
            </h5>
          </span>
        </div>
      )}
      <div className="transfermoney">
        <TransferMoney
          defaultSenderName={customerInfo.name}
          currbalance={customerInfo.currentBalance}
          setloadData={setloadData}
        />
      </div>
    </div>
  );
};

export default CustomerProfile;
