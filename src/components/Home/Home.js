import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { getCustomers } from "../../function/customers";
import { getTransaction } from "../../function/transaction";

const Home = () => {
  const [customersCount, setcustomersCount] = useState("");
  const [transactions, settransactions] = useState([]);
  useEffect(() => {
    getCustomers().then((res) => {
      setcustomersCount(res.data.length);
    });

    getTransaction().then((res) => {
      settransactions(res.data);
    });
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.customercountbox}>
        {customersCount && (
          <>
            <h1>Customers Count</h1>
            <span>{customersCount}</span>
          </>
        )}
      </div>
      <div className={styles.transactionhistorybox}>
        <div className={styles.transationcontentheader}>
          <h1>Transaction History</h1>
          <div className="sm_border"></div>
        </div>
        <div className={styles.transactions}>
          {transactions.map((t) => (
            <>
              <h3>
                {t.senderName} Send{" "}
                <span style={{ color: "#6DBB56" }}>{t.amount}$</span> To{" "}
                {t.receiverName} At{" "}
                <span style={{ color: "#ed747c" }}>
                  {new Date(t.createdAt).toLocaleDateString()}
                </span>
              </h3>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
