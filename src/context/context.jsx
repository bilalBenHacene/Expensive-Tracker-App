import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allExpenseTransactions, setAllExpenseTransactions] = useState([]);
  const [allIncomeTransactions, setAllIncomeTransactions] = useState([]);
  const handleFormSubmit = (data) => {
    if (!data.amount || !data.description) return;
    if (data.type == "expense") {
      setAllExpenseTransactions((prev) => [...prev, data]);
    } else {
      setAllIncomeTransactions((prev) => [...prev, data]);
    }
    setFormData({
      type: "expense",
      amount: 0,
      description: "",
    });
  };
  useEffect(() => {
    setTotalExpense(
      allExpenseTransactions.reduce(
        (accumulator, item) => accumulator + Number(item.amount),
        0
      )
    );
  }, [allExpenseTransactions]);
  useEffect(() => {
    setTotalIncome(
      allIncomeTransactions.reduce(
        (accumulator, item) => accumulator + Number(item.amount),
        0
      )
    );
  }, [allIncomeTransactions]);

  return (
    <GlobalContext.Provider
      value={{
        handleFormSubmit,
        value,
        setValue,
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allExpenseTransactions,
        setAllExpenseTransactions,
        allIncomeTransactions,
        setAllIncomeTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
