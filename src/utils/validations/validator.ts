import Joi from 'joi';
import HttpException from '../http.exception';
import { mapStatusCode } from '../statusCodes';

export default function validator(schema: Joi.Schema, data: object) {
  const { error, value } = schema.validate(data);
  if (error) {
    throw new HttpException(mapStatusCode(error.message), error.message);
  }
  return value;
}
