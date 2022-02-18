import React, { useState, useEffect } from "react";
import "./TransferMoney.css";
import { creatTransaction } from "../../function/transaction";
import { getCustomers } from "../../function/customers";
import { toast } from "react-toastify";
const TransferMoney = ({ defaultSenderName, currbalance, setloadData }) => {
  const initialValues = { senderName: "", receiverName: "", amount: 0 };
  const initialValuess = {
    senderName: defaultSenderName,
    receiverName: "",
    amount: 0,
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState(initialValues);
  const [users, setusers] = useState([]);

  useEffect(() => {
    getCustomers().then((res) => {
      setusers(res.data);
    });
  }, []);
  const setDefName = () => {
    {
      defaultSenderName !== "" &&
        setFormValues({ ...formValues, senderName: defaultSenderName });
    }
  };
  useEffect(() => {
    setDefName();
  }, [defaultSenderName]);
  const handleChange = (e) => {
    setloadData(false);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formErrors);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.senderName) {
      errors.senderName = "Enter Sender Name!";
    }
    if (!values.receiverName) {
      errors.receiverName = "Enter Receiver Name!";
    }

    if (!values.amount) {
      errors.amount = "Enter Amount!";
    }
    if (values.amount > currbalance) {
      errors.nomoney = "No Money";
      toast.error("Money Insufficient!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      creatTransaction(formValues).then((res) => {
        toast.success("Transfer Success", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setloadData(true);
        setFormValues(initialValuess);
        setIsSubmit(false);
      });
    } else {
      // console.log("zab");
      setIsSubmit(false);
    }
  }, [isSubmit]);
  return (
    <div className="transfermoney">
      <div className="transfermoney-content">
        <div className="transfermoney-content-header">
          <h1>Money Transfer</h1>
          <div className="sm_border"></div>
        </div>
        <div className="transfermoney-input">
          <h4>
            Sender Name{" "}
            <span style={{ color: "#FF4A57" }}>{formErrors.senderName}</span>
          </h4>
          <input
            readOnly={true}
            name="senderName"
            value={formValues.senderName}
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <h4>
            Receiver Name{" "}
            <span style={{ color: "#FF4A57" }}>{formErrors.receiverName}</span>
          </h4>
          {/* <input
            name="receiverName"
            type="text"
            onChange={(e) => handleChange(e)}
          /> */}
          <select
            onChange={(e) => handleChange(e)}
            name="receiverName"
            value={formValues.receiverName}
          >
            <option>Select User</option>
            {users && users.map((u) => {})}
            {defaultSenderName
              ? users
                  .filter((user) => user.name !== defaultSenderName)
                  .map((u) => <option value={u.name}>{u.name}</option>)
              : users.map((u) => <option value={u.name}>{u.name}</option>)}
          </select>
        </div>
        <div className="custominputs">
          <h4>
            Amount <span style={{ color: "#FF4A57" }}>{formErrors.amount}</span>
          </h4>
          <span>
            <input
              value={formValues.amount}
              name="amount"
              type="number"
              onChange={(e) => handleChange(e)}
            />{" "}
            $
          </span>
        </div>
        <div className="my-btn">
          <a onClick={(e) => handleSubmit(e)}>Transfer Money</a>
        </div>
      </div>
    </div>
  );
};

export default TransferMoney;
