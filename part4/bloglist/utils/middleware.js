const logger = require('./logger')
const morgan = require('morgan')

morgan.token('body', req => JSON.stringify(req.body))
const requestLogger = morgan(':method :url :status :body')

const unknownEndpoint = (_request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, _request, repsonse, next) => {
  logger.error(error)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = { requestLogger, unknownEndpoint, errorHandler }