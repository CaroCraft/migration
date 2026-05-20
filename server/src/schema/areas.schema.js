const { z } = require('zod')

const createAreaSchema = z.object({
    name: z
        .string()
        .min(1, 'El nombre es obligatorio')
        .max(100, 'El nombre es demasiado largo')
})

const updateAreaSchema = z.object({
    name: z
        .string()
        .min(1, 'El nombre es obligatorio')
        .max(100, 'El nombre es demasiado largo')
        .optional()
})

module.exports = {
    createAreaSchema,
    updateAreaSchema
}