# Calculator Microservice (sit737-2025-prac4p)

This Node.js microservice provides basic calculator functionality.

## Requirements

* Node.js
* npm

## Setup

1.  Clone the repository.
2.  Navigate to the project directory.
3.  Run `npm install` to install dependencies.
4.  Run `npm install express` to install dependencies.
5.  Run `npm init -y`.
6.  Run `npm install winston` 
4.  Run `node app4.js` to start the microservice.

## API Endpoints

* `GET /add?num1={number}&num2={number}`
* `GET /subtract?num1={number}&num2={number}`
* `GET /multiply?num1={number}&num2={number}`
* `GET /divide?num1={number}&num2={number}`

## Logging

* Winston is used for logging.
* Logs are written to `logs/combined.log` and `logs/error.log`.
* Console logging is also enabled.

## Error Handling

* Invalid input parameters result in a 400 error.
* Division by zero results in a 400 error.

## Usage Examples

* `http://localhost:3000/divide?num1=10&num2=5`
* `http://localhost:3000/divide?num1=100&num2=5`

## View Logs

* `Get-Content -Path logs/combined.log -Wait`

## Repo link

https://github.com/Qasimnasir/sit737-2025-prac4p.git
