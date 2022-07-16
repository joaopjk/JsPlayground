import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cwlogs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

interface ECommerceApiStackPros extends cdk.StackProps {
  productsFetchHandler: lambdaNodeJs.NodejsFunction;
  productsAdminHandler: lambdaNodeJs.NodejsFunction;
}

export class ECommerceApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ECommerceApiStackPros) {
    super(scope, id, props);

    const logGroup = new cwlogs.LogGroup(this, 'ECommerceApiLogs')

    const api = new apigateway.RestApi(this, 'ECommerceApi', {
      restApiName: 'ECommerceApi',
      deployOptions: {
        accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
        accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields({
          httpMethod: true,
          ip: true,
          protocol: true,
          requestTime: true,
          resourcePath: true,
          responseLength: true,
          status: true,
          caller: true,
          user: true
        })
      }
    });

    const productFetchIntegration = new apigateway.LambdaIntegration(
      props.productsFetchHandler);

    const productsResource = api.root.addResource('products');
    productsResource.addMethod('GET', productFetchIntegration);
    const productIdResource = productsResource.addResource('{id}');
    productIdResource.addMethod('GET', productFetchIntegration)

    const productsAdminIntegration = new apigateway.LambdaIntegration(
      props.productsAdminHandler);

    productsResource.addMethod('POST', productsAdminIntegration);
    productIdResource.addMethod('POST', productsAdminIntegration);
    productIdResource.addMethod('DELETE', productsAdminIntegration);
  }
}