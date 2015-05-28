// Deps
var path = require('path');
var gitstats = require(path.resolve(__dirname, 'git-fame'));

// Setup Logger
require(path.resolve(__dirname, 'logger'));

// Package
var pkg = require(path.resolve(__dirname, '..', 'package.json'));

// CLI
var cli = require('commander');

// Set CLI Version
cli.version(pkg.version);

// Set CLI Usage
cli.usage('[options] <path>');

// Set CLI options
cli.option('-a, --all', 'Stats for all branches');
cli.option('-b, --branch <branch>', 'Specifiy branch (Default: master)');
cli.option('-l, --loglevel <level>', 'Set Log Level');
cli.option('-t, --trace', 'Set Log Level to trace');

// Extend CLI Help Info with Example
cli.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ git-fame --all path/to/repo');
  console.log('    $ git-fame -b release/0.x.x path/to/repo');
  console.log('');
});

// Parse Process
cli.parse(process.argv);

if(cli.loglevel) log.level = cli.loglevel;
if(cli.trace) log.level = 'trace';

log('Running git-fame Version: ' + cli.version());

// Set Path to Repo (Default: '.')
var repoPath = cli.args.shift() || '.';
log.info('Searching Git Repo in Path: ' + repoPath);
