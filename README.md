# myIP

## Installation

At this moment of time myIP isn't available on npm or any other package manager.

`npm i -g https://github.com/neokske/myIP.git`

or

`yarn global add https://github.com/neokske/myIP.git`

## Tools

### myIP

You can use this tool to copy one of your ip-adresses.
Just run `myIP` and a prompt will appear.

This tool can also be used to just view a list of your ip-adresses.
`myIP -n` or `myIP --nocopy`

### getPWD

With this command you can copy your present working directory (PWD) to your clipboard.
Just run `getPWD` and your PWD will be coppied to your clipboard.

This tool can also be used to just view your PWD.
`getPWD -n` or `getPWD --nocopy`

### compFiles

When you want to compare the content of two files you can use this command. The program will encode the 2 files to base64 and compare if the string are equal.

If the files are equal a message `File contents are equal` will be shown. Otherwise the message `Files contents are not equal` will be shown.

#### Usage
```
compFiles ./package.json ./another-package.json
```
