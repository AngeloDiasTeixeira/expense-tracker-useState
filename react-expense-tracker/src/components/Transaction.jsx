const Transaction = ({transaction, setTransactions, transactionList}) => {
    const {id, name, amount} = transaction;

    const onClick = async () => {
        await fetch("http://localhost:3001/api/transactions", {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({id:id})
        });
        setTransactions(transactionList.filter(t => t.id !== id));
    }

    return (
        <li className={"transaction " + ((amount>=0) ? "border-green" : "border-red")} >
            <button onClick={onClick}>X</button>
            <div>
                <span>{name}</span>
                <span>{(amount >= 0) ? `+${amount}` : amount}</span>
            </div>
        </li>
    )
}

export default Transaction;