import { Response } from 'express';
export declare const createSuccessResponse: (response: Response, code?: number, data?: {}) => Response<any, Record<string, any>>;
export declare const createFailResponse: (response: Response, code?: number, message?: string, data?: {}, error?: {}, returnErrorBody?: boolean) => void;
export declare const createUnauthorizedResponse: (response: Response, error?: {}, message?: string, code?: number) => void;
export declare const createAccessDeniedResponse: (response: Response, error?: {}, message?: string, code?: number, returnErrorBody?: boolean) => void;
export declare const createErrorResponse: (response: Response, code?: number, message?: string, error?: {}, returnErrorBody?: boolean) => void;
export declare const createResponse: (response: Response, code: number, message: string, data: object | undefined, error?: object, returnErrorBody?: boolean) => void;
