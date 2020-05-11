# Admin api
* This project is a seed for building a **node.js** api. It includes the following features:
* *  [tsoa](https://www.npmjs.com/package/tsoa) `typescript`
* * [inversify](https://www.npmjs.com/package/inversify) `inversion of controll / dependency injection`
* * [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
* * [mongoose](https://www.npmjs.com/package/mongoose) `MongoDB ORM`
* * [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai), [supertest](https://www.npmjs.com/package/supertest), [sinon](https://www.npmjs.com/package/sinon) `unit and integration testing`

## Swagger
* `<url>/api-docs`

## Commands
* **instalation:** `yarn install`
* **dev:** `yarn start` *build tsoa routes, swagger definitions and starts the server on development mode listening to file changes (swagger definition changes will require a manual restart)*
* **test:** `yarn test` *unit and integration tests*
* **build:** `yarn build` *production build*
* **prod:** `yarn start:prod` *starts the server on production mode*

## Scaffolding
* config `express server, DB connection, Logger, etc`
* * env `.env files`
* controllers `routes configuration`
* models `classes and interfaces representing entities. They are also used to normalize data`
* respositories `data abstraction layers`
* services `business logic to be used primary by controllers`
* utils
* tests
