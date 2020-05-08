import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import mongoose from 'mongoose';

import './utils/db';
import schema from './schema';
import jwt from 'jsonwebtoken';
import { User } from './models/user';
import { defaultMeasurements } from './default-data/measurements';
import { defaultIngredientCategories } from './default-data/ingredient-categories';
import { defaultSchedulePieces } from './default-data/schedule-pieces';
import { defaultScheduleTemplates } from './default-data/schedule-templates';

const expiresInSeconds = 24 * 60 * 60;

dotenv.config();

const app = express();

app.set('secretKey', process.env.SECRET_KEY);

app.post('/login', (request, response) => {
  User.findOne({ email: request.body.email }, (error, user) => {
    if (error)
      return response
        .status(500)
        .send(`Failed to log in for some reason. Error: ${error}`);
    if (!user)
      return response
        .status(500)
        .send(`Incorrect username or password. Error: ${error}`);

    user.verifyPassword(request.body.password, (error, valid) => {
      if (error)
        return response
          .status(500)
          .send(`Failed to log in for some reason. Error: ${error}`);
      if (valid) {
        const accessToken = jwt.sign({ id: user._id }, app.get('secretKey'), {
          expiresIn: expiresInSeconds,
        });
        response
          .status(200)
          .send({ access_token: accessToken, expiresInSeconds });
      }
      if (!valid)
        response
          .status(500)
          .send(`Incorrect username or password. Error: ${error}`);
    });
  });
  response.status(200).send({ access_token: '' });
});

app.post('/register', (request, response) => {
  User.create(
    {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      measurements: defaultMeasurements,
      ingredientCategories: defaultIngredientCategories,
      schedulePieces: defaultSchedulePieces,
      scheduleTemplates: defaultScheduleTemplates,
    },
    (error, newUser) => {
      if (error)
        response
          .status(500)
          .send({ message: `Failed to create new User. Error: ${error}` });

      const accessToken = jwt.sign({ id: newUser._id }, app.get('secretKey'), {
        expiresIn: expiresInSeconds,
      });
      response
        .status(200)
        .send({ access_token: accessToken, expiresInSeconds });
    }
  );
});

const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/',
  // context: ({ req, res }) => {
  //   const token = req.headers.authorization || '';

  //   let user;

  //   try {
  //     const decoded = jwt.verify(token, app.get('secretKey'));
  //     user = User.findById(decoded.id);
  //   } catch (error) {
  //     return res.redirect('/login');
  //   }

  //   if (!user) throw new AuthenticationError('You must be logged in');

  //   return { user };
  // },
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () =>
    new global.Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    }),
});

app.listen({ port: process.env.PORT }, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  console.log(`Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});
