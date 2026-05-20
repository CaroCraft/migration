const { isAuthenticated } = require('../middleware/auth')

const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')

const { validate } = require('../middleware/validate')
const { createRequestSchema, updateRequestSchema } = require('../schema/requests.schema')
const { checkRole } = require('../middleware/authorize')

router.get('/', isAuthenticated, getAll)
//router.get('/', getAll)
router.get('/:id', getById)
router.delete('/:id', remove)

router.post('/', checkRole('admin'), validate(createRequestSchema), create)
router.put('/:id', checkRole('admin'), validate(updateRequestSchema), update)

module.exports = router
