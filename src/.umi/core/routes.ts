// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jordonez/COMSE6156/NEW6156-PROJECT/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/Login/index').default,
    "exact": true
  },
  {
    "path": "/login",
    "component": require('@/pages/Login/index').default,
    "exact": true
  },
  {
    "path": "/product",
    "component": require('@/pages/Product/index').default,
    "exact": true
  },
  {
    "path": "/create",
    "component": require('@/pages/Create/index').default,
    "exact": true
  },
  {
    "path": "/order",
    "component": require('@/pages/Order/index').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
