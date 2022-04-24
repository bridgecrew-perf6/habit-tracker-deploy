const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', routes);

const PORT = process.env.PORT ?? 8080;

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.blueBright('Connected to mongoDB'));
    app.listen(PORT, () => {
      console.log(chalk.green(`Server is listening on port ${PORT}...`));
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
