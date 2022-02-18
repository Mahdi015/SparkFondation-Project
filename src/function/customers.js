import axios from "axios";

export const getCustomers = async () =>
  await axios.get(`${process.env.REACT_APP_API}/customers/getAllCustomers`, {});

export const getCustomer = async (cName) =>
  await axios.post(`${process.env.REACT_APP_API}/customer/getCustomer`, {
    cName,
  });
