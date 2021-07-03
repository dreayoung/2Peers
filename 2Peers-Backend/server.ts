import express from 'express';
import cors from 'cors';
import session from 'express-session';
const app = express();

const appRouter = require('./routes/appRouter');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const classroomRouter = require('./routes/classroomRouter');
const messageRouter = require('./routes/messageRouter');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: false,
  name: 'Two-Peers'
}))

app.use('/', appRouter);
app.use('/student', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomRouter);
app.use('/messages', messageRouter);

export default app;
