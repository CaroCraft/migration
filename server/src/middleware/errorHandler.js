const { AppError } = require('../errors/AppError')
const { ZodError } = require('zod')

function errorHandler(err, req, res, next) {
  console.error(err)

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message })
  }

  if (err instanceof ZodError) {
    return res.status(400).json({ errors: err.flatten().fieldErrors })
  }

  res.status(500).json({ error: 'Error interno del servidor' })
}