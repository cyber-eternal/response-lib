var success=(a=200,b)=>buildResponse(a,b),failure=(a=409,b)=>buildResponse(a,b),buildResponse=(a,b,c={})=>{const d={statusCode:a,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,"Content-Type":"application/json",...c},body:b?JSON.stringify(b):""};return d};module.exports={success,failure};