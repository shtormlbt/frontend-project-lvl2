#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program.description('Compares two configuration files and shows a difference.');
program.version('0.0.1','-v, --version', 'output the current version');

program.parse();


