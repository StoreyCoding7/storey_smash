const {Client} = require('pg');

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "storey_smash",
  password: "postgres",
  port: 5432
})

client.connect(console.log(`db connection established`));