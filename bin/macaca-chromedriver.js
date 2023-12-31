#!/usr/bin/env node

'use strict';

const program = require('commander');

const { install } = require('../lib/install');

const pkg = require('../package.json');

program
  .option('-v, --versions', 'output version infomation')
  .usage('[]');

program
  .command('install')
  .description('install chromedriver')
  .action(() => {
    install();
  });

program.parse(process.argv);

if (program.versions) {
  console.info('\n  ' + pkg.version + '\n');
  process.exit(0);
}
