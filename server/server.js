require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react', 'es2015'] });

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
var App = require('../client/src/components/App.jsx').default;

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../client/assets')));

// universal routing and rendering
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;

  const context = {};
  markup = renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>,
  );

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }

  if (context.is404) {
    status = 404;
  }

  return res.status(status).render('index', { markup });
});

// start the server
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `);
});