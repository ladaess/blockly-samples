/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview Webpack dev server configuration file.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

module.exports = () => {
  return {
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    static: ['./test'],
    watchFiles: {
      paths: './',
      options: {
        ignored: 'node_modules',
      },
    },
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  };
};
