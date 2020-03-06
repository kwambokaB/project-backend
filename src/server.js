/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import {
  userRoute, counsellorRoute, profileRoute, adminRoute
} from './routes/index';

const app = express();
const port = process.env.PORT || 8080;


// connect db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
  () => console.log('connecting to the database..............'));

// setup express body-perser for json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup routes
app.get('/api/v1', (req, res) => res.status(200).json({
  status: 'success',
  data: { message: 'Welcome to this awesome API!' }
}));

app.use('api/v1/user', userRoute);
app.use('api/v1/counsellor', counsellorRoute);
app.use('api/v1/profile', profileRoute);
app.use('api/v1/admin', adminRoute);

// start server
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
