// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  httpLink: 'https://commerce-app-angular-default-rtdb.firebaseio.com/',
  apiKey: 'AIzaSyBz9uuglu3Ni57p4vgTm0Qf6UTljgnpkiA',
  signUpURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  signInURL: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",

  //KGB
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
