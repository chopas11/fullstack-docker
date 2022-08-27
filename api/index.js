const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello express-postgres');
});

// app.use(express.json());


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
