const statusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  UNPROCESSABLE: 422,
};

const mapStatusCode = (errorMessage: string): number => {
  if (errorMessage.includes('required')) return statusCodes.BAD_REQUEST;
  if (errorMessage.includes('must')) return statusCodes.UNPROCESSABLE;
  return statusCodes.UNAUTHORIZED;
};

export { statusCodes, mapStatusCode };
