import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();


//connect db
mongoose.connect
( process.env.DB_CONNECT, { useNewUrlParser: true } , ()=>{
    console.log('connected to db');
});

// setup express body-perser for json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
