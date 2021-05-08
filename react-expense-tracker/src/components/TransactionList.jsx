import Transaction from "./Transaction";

const TransactionList = ({transactionList, setTransactions}) => {
    return (
        <div className="transaction-list">
            <h1>
                Transactions
            </h1>
            <ul>
                {transactionList.map(transaction => (
                    <Transaction key={transaction.id} 
                                 transaction={transaction} 
                                 setTransactions={setTransactions}
                                 transactionList={transactionList} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;