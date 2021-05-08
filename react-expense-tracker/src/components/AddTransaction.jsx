import { useState } from "react";

const AddTransaction = ({ transactionList, setTransactions }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = async e => {
        e.preventDefault();

        let newTransaction = {
            id: Math.random()*1000, name: name, amount: +amount
        };

        await fetch("http://localhost:3001/api/transactions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTransaction),
        });

        setName("");
        setAmount("");

        setTransactions(transactionList.concat(newTransaction));
    }

    return (
        <div className="add-transaction">
            <h1>
                Add Transaction
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-name">
                    <label htmlFor="name">Transaction name:</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-amount">
                    <label htmlFor="amount">Transaction amount:</label>
                    <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div className="form-button">
                    <button type="submit">Add transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction;