const express = require("express");


const mongoose = require('mongoose')
const app = express();
const cors = require('cors')





const jobRouter = require('./routes/job.route')




require('dotenv').config();



main().catch(err => console.log(err)); 

async function main() {
    await mongoose.connect('mongodb+srv://shivanikujala5:a4CdP1JdXyUtbjtw@cluster0.uemyp98.mongodb.net/jobportalapp?retryWrites=true&w=majority');
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  





app.use(express.json());
app.use(cors());



// New routes

app.use('/' , jobRouter)


app.listen(3001,() => {
    console.log(`Server running at http://localhost:3001`)
})