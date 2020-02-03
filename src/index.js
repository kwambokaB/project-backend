import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoute from './routes/user';


const app = express();
const PORT = process.env.PORT || 5000;


//connect db
mongoose.connect
( process.env.DB_CONNECT, { useNewUrlParser: true } , ()=>{
    console.log('connected to db');
});

// setup express body-perser for json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup routes
app.get('/', (req, res) => res.status(200).json({
    status: 'success',
    data: { message: 'Welcome to this awesome API!' }
  }));

app.use('/api/v1/auth', userRoute);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });

  export default app;