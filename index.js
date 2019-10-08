  var success = (status = 200, body, headers) => {
    return buildResponse(status, body, headers);
  };

  var failure = (status = 409, body, headers) => {
    return buildResponse(status, body, headers);
  };

  var buildResponse = (statusCode, body, headers = {}) => {
    const response = {
      status: statusCode,
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : '',
    }
    return response;
  };

  // var custom = ({ statusCode, response, contentType, location }) => {
  //   console.log('**** custom callback active ****');
  //   console.log(statusCode);
  //   console.log(response);
  //   return buildResponse(statusCode, response, contentType, location);
  // };

  // var imageBuffer = (statusCode, imageBuffer) => {
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

  module.exports = {
    success,
    failure
  }