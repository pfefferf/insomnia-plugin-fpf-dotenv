# insomnia-plugin-fpf-dotenv

Insomina plugin to get environment settings from a .env file

This plugin is based on the [insomnia-plugin-dotenv](https://www.npmjs.com/package/insomnia-plugin-dotenv) plugin and is adjusted to overcome some issues on windows machines.

## Installation

Open the Insomnia `Preferences` dialogue, goto tab `Plugins` and enter the name `insomnia-plugin-fpf-dotenv` in the field `npm-package-name`. Press button `Install Plugin`.

## Usage

Goto `Manage Environments` and create a new environment or choose an existing environment. 

In the `value` field of a variable enter `dotenv` and wait until a menu appears. Choose `dotenv`.
In the opened dialogue choose `dotenv - Get data from .env`.
In the `Choose .env file` manually a path to a dotenv file needs to be entered. Here it needs to be considered that on windows systems a forward slash must be used and the forward slash must be escaped with a backward slash. 

For instance if the .env file is stored at C:\DEV\insominia\.env, the path to be entered must be C:\\/DEV\\/insominia\\/.env. This is necessary due to the current general escaping mechanism of Insomnia.

After a path to a valid .env is entered, in the `Variable Name` field a variable defined in the .env file needs to be entered. If the variable name is correct, the value of variable will be shown in the `Live Preview` field.
