This project is a CodeCademy Ecommerce REST API app using my server side web development knowledge.
This project aims to build a fully-functioning e-commerce application REST API that allows users to perform various CRUD operations such as registering an account, browsing products for sale, etc.

    Build a functioning e-commerce REST API using Express, Node.js, and Postgres
    Allow users to register and log in via the API
    Allow CRUD operations on products
    Allow CRUD operations on user accounts
    Allow CRUD operations on user carts
    Allow a user to place an order
    Allow CRUD operations on orders
    Use Git version control
    Use command line
    Develop locally on your computer
    Document the API using Swagger

#
To Config run
> <APP>
> node app.js #LAUNCH APP

> <DATABASE>
> node dbconfig.js #CONNECT DATABASE

> <SERVER>
> "C:\Program Files\PostgreSQL\15\bin\pg_ctl.exe" start -D "C:\Program Files\PostgreSQL\15\data" #START SERVER
> netstat -an | findstr "5432" #CHECK LISTENING
> tasklist | findstr "14476" #CHECK PID
