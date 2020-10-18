# package

Node.js NPM package template.  
Includes: StandardJS linting, ESM, JSDoc  
GitHub Actions set up:

- On every commit the package is linted with standard and **automatically fixed if possible**.
- It also checks if the version in package.json has changed, if yes then uploads to NPM.

TODO: Setup the repo

- Generate an npm secret: `npm token create`
- Go to https://github.com/user/repo/settings/secrets/new
- Add `npm_token` with the value you generated above
- Go to https://github.com/user/repo/settings and enable GitHub pages in ./docs

### Installation

TODO: Provide your own install instructions

```bash
npm install your-library # or yarn add your-library
```

### Usage

```js
// TODO: Provide example code
const myPackage = require("package");
myPackage.doStuff();
```

### API

TODO: Provide an acutal JSDoc URL  
The JSDoc can be accessed at https://dada513.github.io/package/
