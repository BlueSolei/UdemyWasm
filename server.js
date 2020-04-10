const express = require("express");
const app = express();

const dir = `${__dirname}/public`;
console.log(`Shaul: ${dir}`);
app.use(express.static(dir));

var port = 2222;
app.listen(port, () => console.log(`Server run on port ${port}`));
