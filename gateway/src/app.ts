import express from 'express';
import mongoose from 'mongoose';
const bodyParser = require('body-parser');
import router from './routes/transactions'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

//Link to our mongodb database
const db_url = 'mongodb://localhost:27017/gateway_db'

app.use('/api', router)

// mongodb connection
mongoose.connect(db_url)
.then(result => app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`)))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!');
});