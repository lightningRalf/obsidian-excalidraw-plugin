The project runs with `node 18`. 

After running `npm -i` you'll need to make two manual changes:

## postprocess
postprocess is used in rollup.config.js.
However, the version available on npmjs does not work, after installing packages you need this update: 
`npm install brettz9/rollup-plugin-postprocess#update --save-dev``

More info here: https://github.com/developit/rollup-plugin-postprocess/issues/10

## colormaster
1.2.1 misses 3 plugin references after installing the package you need to update
`node_modules/colormaster/package.json` adding the following to the `exports:` section:
```typescript
,
    "./plugins/luv": {
      "import": "./plugins/luv.mjs",
      "require": "./plugins/luv.js",
      "default": "./plugins/luv.mjs"
    },
    "./plugins/uvw": {
      "import": "./plugins/uvw.mjs",
      "require": "./plugins/uvw.js",
      "default": "./plugins/uvw.mjs"
    },
    "./plugins/ryb": {
      "import": "./plugins/ryb.mjs",
      "require": "./plugins/ryb.js",
      "default": "./plugins/ryb.mjs"
    }
```

## Running Tests and Contributing to Test Development

To run the Jest tests for the Excalidraw plugin, use the following command:

```bash
npm run test
```

This will execute all tests located in the `__tests__` directory and generate a coverage report. To contribute to test development, ensure you have a thorough understanding of the Excalidraw plugin's functionality and the Jest testing framework. Write tests that cover a wide range of scenarios, including edge cases, to ensure the robustness of the plugin's key components.

For more information on test coverage and our testing philosophy, refer to the project's documentation on GitHub.
