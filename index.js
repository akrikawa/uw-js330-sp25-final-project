const server = require('./server');
const mongoose = require('mongoose');

// console.log(process.env.JWT_SECRET);
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET was not provided');
}

const port = process.env.PORT || 3000;

mongoose
  .connect('mongodb://127.0.0.1/jscript-330-final-project', {})
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error(`Failed to start server:`, e);
  });
