## Table of Contents

- [Fix `Tailwind CSS` and `daisyUI` ___setup___ problem using `ChatGPT`](#fix-tailwind-css-and-daisyui-setup-problem-using-chatgpt)
  - [Tailwind CSS does not work for create react app. how to setup properly `(ChatGPT - Working)`](#tailwind-css-does-not-work-for-create-react-app-how-to-setup-properly-chatgpt---working)
  - [how to Install daisyUI as a Tailwind CSS plugin `(ChatGPT - Working)`](#how-to-install-daisyui-as-a-tailwind-css-plugin-chatgpt---working)
  - [Fix the upstream dependency conflict installing NPM packages](#fix-the-upstream-dependency-conflict-installing-npm-packages)

# Fix `Tailwind CSS` and `daisyUI` ___setup___ problem using `ChatGPT`

> First of all, install according to [Tailwind CSS](https://tailwindcss.com/docs/installation) & [daisyUI](https://daisyui.com/docs/install/). Then follow the below steps accordingly.

## Tailwind CSS does not work for create react app. how to setup properly `(ChatGPT - Working)`

> Tailwind CSS can be used with Create React App by following these steps:

1. Install Tailwind CSS and its dependencies using npm:

``` Terminal
npm install -D tailwindcss postcss-cli autoprefixer
```

2. Create a `postcss.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```
3. Create a `tailwind.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [],
}
```
4. Import the Tailwind CSS styles in your `index.css` file:
``` CSS
/* ./src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Import the `index.css` file in your `index.js` file:
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
> With these steps, Tailwind CSS should be set up and working properly with Create React App.

**[🔼Back to Top](#table-of-contents)**

## how to Install daisyUI as a Tailwind CSS plugin `(ChatGPT - Working)`

> To install DaisyUI as a Tailwind CSS plugin, you need to follow these steps:

1. Install Tailwind CSS and its dependencies using npm:

``` Terminal
npm install -D tailwindcss postcss-cli autoprefixer
```

2. Create a `postcss.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('daisyui'),
  ]
}
```
3. Create a `tailwind.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
```
4. Import the Tailwind CSS styles in your `index.css` file:
``` CSS
/* ./src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Import the `index.css` file in your `index.js` file:
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
> With these steps, DaisyUI should be set up and working properly as a Tailwind CSS plugin. <br> You can now use DaisyUI components in your React application by following its documentation.

**[🔼Back to Top](#table-of-contents)**

## Fix the upstream dependency conflict installing NPM packages

> `How to fix the upstream dependency conflict installing NPM packages:` <br /><br /> `npm install '--legacy-peer-deps' -S <whatever package>` <br /># `-S is the same as --save` <br /># `i.e` <br />`npm install '--legacy-peer-deps' --save react-useanimations` <br />[stackoverflow solution](https://stackoverflow.com/questions/64936044/fix-the-upstream-dependency-conflict-installing-npm-packages)

``` JavaScript
// Install Font Awesome Icons

npm install '--legacy-peer-deps' --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

**[🔼Back to Top](#table-of-contents)**