//PATTERN: Server Side Rendering
const express = require('express');
const serverRenderer = require('../dist/serverRenderer').default;

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(serverRenderer());

app.listen(3000, () => {
  console.info('Express listening on port: ' + port);
});

module.exports = app;
