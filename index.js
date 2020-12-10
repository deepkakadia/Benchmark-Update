const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/randomexample');
const evaluationRoute = require('./routes/evaluation');

app.use(cors());

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Database -Benchmark Connected');
  }
);

//MiddleWare
app.use(express.json());

//Import Routes

app.use(express.static('client/build'));

//Route middlewares

app.use('/api/user', authRoute);
app.use('/api/post', postRoute);
app.use('/api/evaluation', evaluationRoute);

app.listen(process.env.PORT || 8000, () =>
  console.log('Backend server up and running! PORT:8000')
);
