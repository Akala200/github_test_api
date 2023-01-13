import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import { notFound } from './server/middlewares/errorhandlers';
import traceLogger from './server/logger/tracelogger';
import routes from './server/routes';
// initialize express
const app = express();

// for request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));


app.get('/', (req, res) => {
  res.json({ massage: 'Welcome to Test API' });
});
app.use('/api', routes);

app.use('*', notFound);
app.use(errorhandler());

process.on('unhandledRejection', (reason) => {
  traceLogger(reason);
});

process.on('uncaughtException', (reason) => {
  traceLogger(reason);
});

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  process.stdout.write(`app is listening on port ${PORT}`);
});


export default app;
