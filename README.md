# js-proj-template
Startup files for js, with browserify, running with grunt

The steps required to set this up:
```
$ npm init
package name: (js-proj-template) 
version: (1.0.0) 
description: boilerplate to get a browserify/node/grunt project going
entry point: (index.js) app-client.js
test command: 
git repository: (https://github.com/meekrob/js-proj-template.git) 
keywords: javascript browserify grunt node 
author: David C. King
license: (ISC) 
About to write to /Users/david/dev/js-proj-template/package.json:

{
  "name": "js-proj-template",
  "version": "1.0.0",
  "description": "boilerplate to get a browserify/node/grunt project going",
  "main": "app-client.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/meekrob/js-proj-template.git"
  },
  "keywords": [
    "javascript",
    "browserify",
    "grunt",
    "node"
  ],
  "author": "David C. King",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/meekrob/js-proj-template/issues"
  },
  "homepage": "https://github.com/meekrob/js-proj-template#readme"
}


Is this ok? (yes)
```

```
$ mkdir lib public public/js 
$ touch app-client.js app.js public/index.html
$ git add app.js app-client.js public/index.html
$ npm i --save-dev grunt grunt-browserify grunt-contrib-jshint
$ git add package.json package-lock.json
$ npm i --save express
+ express@4.16.3
```
added 46 packages from 33 contributors in 5.016s
[david@ElPolloLoco:~/dev/js-proj-template]$ git add GruntFile.js
[david@ElPolloLoco:~/dev/js-proj-template]$ echo node_modules > .gitignore
[david@ElPolloLoco:~/dev/js-proj-template]$ git add .gitignore
[david@ElPolloLoco:~/dev/js-proj-template]$ touch public/js/bundle.js
[david@ElPolloLoco:~/dev/js-proj-template]$ git add public/js/bundle.js
```
