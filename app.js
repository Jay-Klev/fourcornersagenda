import Express from "express";

const app = Express();
const port = 3000;
const fs = require('fs')

app.get('/', (req, res) => {

	res.send('Hello, Four Corners!!');

});

app.listen(port, () => console.log('example app listening on port ' + ${port} ' .'));
