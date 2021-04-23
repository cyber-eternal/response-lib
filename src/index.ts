const success = (status = 200, body: any, headers: any) => {
  return buildResponse(status, body, headers);
};

const failure = (status = 409, body: any, headers: any) => {
  return buildResponse(status, body, headers);
};

const buildResponse = (statusCode: number, body: any, headers: any = {}) => {
  const response = {
    status: statusCode,
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : '',
  };
  return response;
};

// const custom = ({ statusCode, response, contentType, location }) => {
//   console.log('**** custom callback active ****');
//   console.log(statusCode);
//   console.log(response);
//   return buildResponse(statusCode, response, contentType, location);
// };

// const imageBuffer = (statusCode, imageBuffer) => {
//   return {
//     statusCode,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//       'Content-Type': 'image/png',
//     },
//     body: imageBuffer,
//     isBase64Encoded: true
//   };
// };

export default {
  success,
  failure,
};
