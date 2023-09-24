# casdoor-react-only-example

A frontend-only example based on React and [casdoor-js-sdk](https://github.com/casdoor/casdoor-js-sdk).

![demo.mp4](demo.mp4)

### Installation:

First, clone the repository:

```shell
git clone https://github.com/casdoor/casdoor-react-only-example
```

Then, fetch the dependency:

```shell
yarn install
```

Next, you need to configure 5 parameters in: https://github.com/casdoor/casdoor-react-only-example/blob/master/src/Setting.js

```js
const sdkConfig = {
  serverUrl: "https://door.casdoor.com", // Casdoor server url
  clientId: "294b09fbc17f95daf2fe",
  organizationName: "casbin",
  appName: "app-vue-python-example",
  redirectPath: "/callback", // your app callback path
};
```

### Start the application

```shell
yarn start
```
