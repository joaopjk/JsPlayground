import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context
} from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent,
  context: Context): Promise<APIGatewayProxyResult> {

  const lambdaRequestId = context.awsRequestId;
  const gatewayRequestId = event.requestContext.requestId;
  const method = event.httpMethod;
  
  console.log(`API Gatway RequestId: ${gatewayRequestId} 
             - Lambda RequestId: ${lambdaRequestId}`);

  if (event.resource === '/products') {
    if (method === 'GET') {
      console.log('GET')
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Get products - OK'
        })
      }
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Bad Request'
    })
  }
}