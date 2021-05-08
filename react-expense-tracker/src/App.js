import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  
  let balance = transactions.reduce((sum,t) => sum + t.amount, 0);
  let incomeValues = transactions.map( t => (t.amount>=0) ? t.amount : 0);
  let income = incomeValues.reduce((sum,iV) => sum + iV, 0);
  let expense = (balance >= 0) ? (income-balance) : (income+Math.abs(balance));

  useEffect( () => {
    const f = async () => {
      let response = await fetch("http://localhost:3001/api/transactions");
      let items = await response.json();
      setTransactions(items);
    }
    f();
  },[]);

  return (
    <div className="app-container">
      <div className="first">
        <div className="header">
          <Header />
        </div>
        <div className="balance-income-expense">
          <Balance balance={balance} />
          <IncomeExpense income={income} expense={expense} />
        </div>
      </div>
      <div className="second">
        <TransactionList transactionList={transactions} setTransactions={setTransactions} />
      </div>
      <div className="third">
        <AddTransaction transactionList={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  );
}

export default App;
