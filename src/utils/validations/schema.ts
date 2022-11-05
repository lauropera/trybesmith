import Joi from 'joi';

const loginSchema: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const newProductSchema: Joi.Schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const newUserSchema: Joi.Schema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const newOrderSchema: Joi.Schema = Joi.object({
  productsIds: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});

export { loginSchema, newProductSchema, newUserSchema, newOrderSchema };
