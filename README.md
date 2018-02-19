# Simple Base

A very simple framework-less setup w/:

- Babel
- Browserify
- ESLint
- Sass
- Yarn

## Installation
To get started, simply clone this repo and update the remote origin URL.

```
git clone https://github.com/UseAllFive/simple-base.git my-dir-name
git remote set-url origin https://github.com/{my-git-username}/{my-git-repo}.git
```

## Commands
``` 
yarn run start; // start node server and livereload
yarn run build; // prep files for production
```

## Updating

If Simple Base updates and you'd like these updates to applied to your project, add a remote pointing to here and pull in master.

```
git remote add upstream https://github.com/UseAllFive/simple-base.git
git pull upstream master
```

## Directory Structure

```
.
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── README.md
├── index.html
├── package.json
├── scripts
│   └── app.js
├── styles
│   └── style.scss
└── yarn.lock
```