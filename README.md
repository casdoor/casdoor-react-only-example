# Casdoor React Only Example

[![Build](https://github.com/casdoor/casdoor-react-only-example/actions/workflows/build.yml/badge.svg)](https://github.com/casdoor/casdoor-react-only-example/actions/workflows/build.yml)
[![License](https://img.shields.io/github/license/casdoor/casdoor-react-only-example)](https://github.com/casdoor/casdoor-react-only-example/blob/master/LICENSE)
[![Discord](https://img.shields.io/discord/1022748306096537660?logo=discord&label=discord&color=5865F2)](https://discord.gg/5rPsrAzK7S)

A frontend-only React app that signs users in with [Casdoor](https://casdoor.ai/) using [casdoor-js-sdk](https://github.com/casdoor/casdoor-js-sdk). There is no backend: the app gets the access token itself with the OAuth 2.0 authorization code flow and PKCE, so it needs no client secret.

https://github.com/casdoor/casdoor-react-only-example/assets/3787410/70db581c-3b0b-46a8-aea2-e4dd0e43825c

## How it works

1. **Casdoor Login** calls `CasdoorSDK.signin_redirect()`: the SDK creates a PKCE code verifier and a random state, keeps them in the browser and goes to the Casdoor sign-in page ([LoginPage.js](src/LoginPage.js)).
2. After signing in, Casdoor redirects back to `http://localhost:3000/callback` with `code` and `state`.
3. The callback page calls `CasdoorSDK.exchangeForAccessToken()`: the SDK checks the state and exchanges the code for the tokens with the code verifier, directly at Casdoor ([AuthCallback.js](src/AuthCallback.js)).
4. The app keeps the access token in localStorage and reads the user with `CasdoorSDK.getUserInfo()` ([HomePage.js](src/HomePage.js)). **Profile** opens the user's account page in Casdoor (`getMyProfileUrl()`).

Use a backend instead (see [casdoor-nodejs-react-example](https://github.com/casdoor/casdoor-nodejs-react-example)) when your own APIs need to know the user: the backend then verifies the token.

## Prerequisites

- Node.js 18+ and Yarn
- A Casdoor server. The example is preconfigured for the public demo server https://door.casdoor.com, so it runs as is. To use your own, see [Casdoor installation](https://casdoor.ai/docs/basic/server-installation).

## Configuration

Skip this section to try the example with the public demo server.

In your Casdoor, create (or reuse) an organization and an application, and add `http://localhost:3000/callback` to the application's **Redirect URLs**. Then fill in [src/Setting.js](src/Setting.js):

```js
const sdkConfig = {
  serverUrl: "https://door.casdoor.com", // Casdoor server URL
  clientId: "294b09fbc17f95daf2fe", // client ID of the application
  organizationName: "casbin", // organization of the application
  appName: "app-vue-python-example", // name of the application
  redirectPath: "/callback", // callback path of the app
};
```

## Run

```shell
git clone https://github.com/casdoor/casdoor-react-only-example
cd casdoor-react-only-example
yarn install
yarn start
```

Open http://localhost:3000 and click **Casdoor Login**. On the demo server, sign in with username `admin` and password `123`.

## Resources

- [Casdoor documentation](https://casdoor.ai/docs/overview)
- [casdoor-js-sdk](https://github.com/casdoor/casdoor-js-sdk)

## License

[Apache-2.0](LICENSE)
