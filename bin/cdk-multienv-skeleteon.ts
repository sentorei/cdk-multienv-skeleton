#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkMultienvSkeleteonStack } from '../lib/cdk-multienv-skeleteon-stack';

const app = new cdk.App();
new CdkMultienvSkeleteonStack(app, 'CdkMultienvSkeleteonStack');
