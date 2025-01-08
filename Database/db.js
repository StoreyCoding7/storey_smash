const {Client} = require('pg');

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "storey_smash",
  password: "postgres",
  port: 5432
})

client.connect();


//USERS
client.query(`Select * from users`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})
//PRODUCTS
client.query(`Select * from products`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
});
