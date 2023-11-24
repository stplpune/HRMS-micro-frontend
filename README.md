# HRMSMicroFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- Installed Packages

For Micro Frontend
 1.npm i @angular/elements 
 2.add package.json file under script obj add bundle
 "bundle": "ng build --output-hashing none && node concat.js"
 3.npm i concat

 4.add app.module under ngDoBootstrap

 1.export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {//for useing micro frontend 
    const element = createCustomElement(AppComponent, {
      injector: this.injector
    })
    customElements.define('micro', element);
  }
}
2. Add  entryComponents: [AppComponent] after  bootstrap: [AppComponent],
when befor npm run bundle comment  bootstrap: [AppComponent]

5.Create concat.js file

Add this script in concat.js file

const concat = require("concat");
(async function build() {const files = [
        "./dist/reports/runtime.js",
        "./dist/reports/polyfills.js",
        "./dist/reports/main.js"
];
await concat(files, "./dist/reports/reports-module.js")})();

6. Build comment
    npm run bundle 
 -->


 <!-- used micr frontend project changes
 1.npm i @angular-extensions/elements

 2.  In app module
 1.schemas:[CUSTOM_ELEMENTS_SCHEMA] 
 2.LazyElementsModule import 
  
  
  https://stackblitz.com/edit/angular-extensions-elements-basic-example?file=src%2Fapp%2Fapp.component.ts-->