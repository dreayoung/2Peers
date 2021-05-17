const express = require('express');
const cors = require('cors');
const session = require('express-session')

const app = express();
const PORT = process.env.PORT || 8080;

const appRouter = require('./routes/appRouter');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: '2peers Tutoring',
  resave: false,
  saveUninitialized: false,
  name: '2peers'
}))

app.use('/', appRouter);
app.use('/student', studentRouter);
app.use('/teachers', teacherRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
