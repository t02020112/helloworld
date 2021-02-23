const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send(`Hello World2!`);
});
const port = 8082;
app.listen(port, () => {
console.log(`helloworld: listening on port ${port}`);
});