# backend setup root folder
- git init
- npm init
- npm install nodemon -D
- npm install express
- npm install dotenv
- npm install mongoose
- npm install validator
- npm install colors
- npm install slugify
- npm install express-async-errors
- npm install http-status-codes
- npm install bcryptjs
- npm install jsonwebtoken
- npm install concurrently --save-dev
- npm install cors
- npm install moment

# setup nb
- create a db name in connection string as mongo connect copy/paste leaves it out 
i.e mongodb+srv://<user>:<password>@devjobs-cluster.i3cwm.mongodb.net/<dbname>?retryWrites=true&w=majority

# running app
- cd root && npm install
- cd frontend && npm install
- After proxy set up in frontend pkg.json, and concurrently set up in server pkg.json, cd root & npm start