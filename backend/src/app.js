import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import cors from 'cors';

import db from './models';
import router from './routes';
import corsOptions from './configs';

const app = express();

db.sequelize.sync();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api', cors(corsOptions), router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

export default app;
