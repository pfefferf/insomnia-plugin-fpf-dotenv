const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const fs = require('fs');

const parse = function( config ) {
  var newObj = { 
      ignoreProcessEnv: false, 
      parsed: {}
    }
  Object.keys(config).forEach(function (key) {
      process.env[key] = config[key]
  })
  newObj.parsed = config
  return newObj;
}

module.exports.templateTags = [
  {
    displayName: 'dotenv',
    name: 'dotenv',
    description: 'Get data from .env',
    args: [
      {
        displayName: 'Choose .env file',
        help: 'Path to .env file',
        type: 'string'
      },
      {
        displayName: 'Variable Name',
        description: 'Name of the variable',
        type: 'string'
      } 
    ],
    run(context, path, varName) {
      fs.stat(path, function(err) {
        if (err && err.code === 'ENOENT')
          console.log('File or directory not found');
      });

      const config = dotenv.parse(fs.readFileSync(path));
      dotenvExpand.expand( parse(config) );


      if (!config || config.error) {
        throw new Error('Configuration cannot be parsed.', config.error);
      }
      
      if (config[varName] === undefined) {
        throw new Error('Variable not found.');
      }

      return config[varName];
    }
  }
];
