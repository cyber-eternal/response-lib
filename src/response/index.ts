import { Response } from 'express';

import config from '../config';

export const createSuccessResponse = (response: Response, code = 200, data = {}) =>
  response.status(code).json({
    status: 'success',
    data,
  });

export const createFailResponse = (
  response: Response,
  code = 400,
  message = 'Bad Request',
  data = {},
  error = {},
  returnErrorBody: boolean = false,
) =>
  response.status(code).json({
    status: 'fail',
    message,
    data,
    ...(config.mode === 'development' || returnErrorBody ? { error } : {}),
  });

export const createUnauthorizedResponse = (response: Response, error = {}, message = 'Unauthorized', code = 401) =>
  response.status(code).json({
    status: 'fail',
    message,
  });

export const createAccessDeniedResponse = (
  response: Response,
  error = {},
  message = 'Do Not Have Permission',
  code = 403,
  returnErrorBody: boolean = false,
) =>
  response.status(code).json({
    status: 'fail',
    message,
    ...(config.mode === 'development' || returnErrorBody ? { error } : {}),
  });

export const createErrorResponse = (
  response: Response,
  code = 500,
  message = 'Internal Server Error',
  error = {},
  returnErrorBody: boolean = false,
) =>
  response.status(code).json({
    status: 'error',
    message,
    ...(config.mode === 'development' || returnErrorBody ? { error } : {}),
  });

export const createResponse = (
  response: Response,
  code: number,
  message: string,
  data: object | undefined,
  error: object = {},
  returnErrorBody: boolean = false,
) => {
  if (code >= 200 && code < 300) {
    createSuccessResponse(response, code, data);
  } else if (code === 403) {
    createAccessDeniedResponse(response);
  } else if (code === 401) {
    createUnauthorizedResponse(response);
  } else if (code >= 400 && code < 500) {
    createFailResponse(response, code, message, data, error, returnErrorBody);
  } else {
    createErrorResponse(response, code, message, data || error, returnErrorBody);
  }
};
