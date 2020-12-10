const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/randomexample');
const evaluationRoute = require('./routes/evaluation');
const path = require('path');


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
app.use(cors())
app.use(express.json());

//Import Routes
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


//Route middlewares

app.use('/api/user', authRoute);
app.use('/api/post', postRoute);
app.use('/api/evaluation', evaluationRoute);

app.listen(process.env.PORT || 8000, () =>
  console.log('Backend server up and running! PORT:8000')
);
