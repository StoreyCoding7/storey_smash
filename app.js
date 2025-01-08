const express = require('express')
const app = express()
const port = 3002
const loaders = require('./loaders');

app.get('/', (req, res) => {
  res.send('Hello World!')
})





async function startServer() {

  // Init application loaders
  loaders(app);

  // Start server
  app.listen(port, () => {
    console.log(`storey_smash_api server listening on PORT ${port}`);
  })
}

startServer();
