const express = require('express');
const path = require('path');
const { fetchCovidStatus, filterData } = require('./fetchCovidStatus');

const app = express(); // use express
const dir = path.join(__dirname, '../'); // goes 1 folder back to the given __dirname
app.use(express.static(dir)); // serving static files
const port = process.env.PORT || 3030; // getting the env port
app.listen(port, () => console.log('listening to localhost:' + port)); // listening to the port
app.get('/api', async function (req, res) {
    const div = await fetchCovidStatus() // fetching data
        .then((data) => filterData(data)); // filtering data
    console.log(div)
    return res.send(div); // send data
});