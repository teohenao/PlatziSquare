// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Para instalar firebase en proyecto angular
// npm install @angular/fire firebase --save

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDitLAvqmiXPaHCzhErlyPrC60wBU3H-sE",
    authDomain: "platzisquare-250000.firebaseapp.com",
    databaseURL: "https://platzisquare-250000.firebaseio.com",
    projectId: "platzisquare-250000",
    storageBucket: "",
    messagingSenderId: "183008511527",
    appId: "1:183008511527:web:d0dcd21778ced2fe"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
