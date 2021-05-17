const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8000;

const appRouter = require('./router/appRouter');

app.use(cors());
app.use(express.json());
app.use('/', appRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
