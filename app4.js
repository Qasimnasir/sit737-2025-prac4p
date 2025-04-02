const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

function calculate(operation, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return { error: 'Invalid input parameters' };
  }

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        return { error: 'Cannot divide by zero' };
      }
      result = num1 / num2;
      break;
    default:
      return { error: 'Invalid operation' };
  }
  return { result };
}

app.get('/:operation', (req, res) => {
  const operation = req.params.operation;
  const num1 = req.query.num1;
  const num2 = req.query.num2;

  const calculation = calculate(operation, num1, num2);

  if (calculation.error) {
    logger.error(calculation.error);
    return res.status(400).json(calculation);
  }

  logger.info(`New ${operation} operation requested: ${num1} ${operation} ${num2}`);
  res.json(calculation);
});

app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});