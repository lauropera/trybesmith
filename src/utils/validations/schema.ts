import Joi from 'joi';

const loginSchema: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const newProductSchema: Joi.Schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export { loginSchema, newProductSchema };
