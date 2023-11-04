import React from "react";

const Translist = ({ transactions }) => {
    return (
        <div className="m-4">
            {transactions.map((transaction) => {
                return (
                <div className="d-flex  align-items-center">
                    <p>
                    {transaction.date == null
                        ? "No date"
                        : transaction.date.substring(0, 10)}
                    </p>
                    <p className="text-danger">
                    {transaction.from}    <i className="fa fa-arrow-right"></i>
                    </p>
                    <p className="text-success">{transaction.to}</p>
                    <p>{transaction.note}</p>
                    <p className="text-success">{transaction.amount} USD</p>
                </div>
            );
        })}
        </div>
  );
};

export default Translist;
