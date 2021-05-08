let express = require("express");

const app = express();

const port = 3001;

let transactions = [];

app.use(require("cors")());
app.use(express.json());

app.get("/api/transactions", (req,res) => {
    res.json(transactions);
});

app.post("/api/transactions", (req,res) => {
    transactions.push(req.body);
    res.json(transactions);
})

app.delete("/api/transactions", (req,res) => {
    transactions = transactions.filter(t => t.id !== req.body.id);
    res.json(transactions);
});

app.listen(port, () => {
    console.log("SERVER IS RUNNING!");
});
