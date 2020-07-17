#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EnvironmentDefinition } from "../lib/env-definition";
import { CdkMultienvSkeletonStack } from '../lib/cdk-multienv-skeleton-stack';

const app = new cdk.App();

const targetEnv = app.node.tryGetContext('TARGET_ENV')
const envDef = new EnvironmentDefinition(targetEnv)
const envParam = envDef.getEnvAccount()

new CdkMultienvSkeletonStack(app, 'CdkMultienvSkeletonStack', { env: envParam });
