import axios from "axios";

export const creatTransaction = async (values) =>
  await axios.post(
    `${process.env.REACT_APP_API}/transaction/creatTransaction`,
    { values }
  );
export const getTransaction = async () =>
  await axios.get(
    `${process.env.REACT_APP_API}/transaction/getTransactions`,
    {}
  );
