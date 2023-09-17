# casdoor-react-only-example

A web SPA only example is implemented through React and [casdoor-js-sdk](https://github.com/casdoor/casdoor-js-sdk).

### Installation:

First, you need to clone the repository.

```shell
git clone https://github.com/casdoor/casdoor-react-only-example.git
```

Then, download the dependency respectively.

```shell
yarn install
or 
npm install
```

Next, you need to configure 6 parameters in `web/src/Setting.js`.

```js
const sdkConfig = {
  serverUrl: "http://localhost:8000", // Casdoor server url
  clientId: "<your client id>",
  appName: "<your application name>",
  organizationName: "<your organization name>",
  redirectPath: "/callback", // your app callback path
};
```

### Start the application

```shell
yarn start
```
