/* eslint-disable import/extensions */
import app from './app.js';

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`App live on: http://localhost:${PORT}`);
});
