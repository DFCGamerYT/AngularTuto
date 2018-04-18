// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBUbBE43mwD0sNvOzyu3yrfWtxnAYEjPJM",
    authDomain: "my-app-af1a3.firebaseapp.com",
    databaseURL: "https://my-app-af1a3.firebaseio.com",
    projectId: "my-app-af1a3",
    storageBucket: "my-app-af1a3.appspot.com",
    messagingSenderId: "544726149248"
  }
};
