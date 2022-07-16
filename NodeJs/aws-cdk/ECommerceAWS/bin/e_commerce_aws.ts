#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProductAppStack } from '../lib/productsApp-stack';
import { ECommerceApiStack } from '../lib/ecommerceApi-stack';

const app = new cdk.App();
const env: cdk.Environment = {
  account: process.env.ACCOUNT,
  region: process.env.REGION
}
const tags = {
  cost: 'ECommerce',
  team: 'AlessandroEnterprise'
}

const productsAppStack = new ProductAppStack(app, 'ProductsApp', {
  tags,
  env
});
const ecommerceApiStack = new ECommerceApiStack(app, "ECommerceApi", {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  productsAdminHandler: productsAppStack.productsAdminHandler,
  tags,
  env
});
ecommerceApiStack.addDependency(productsAppStack);