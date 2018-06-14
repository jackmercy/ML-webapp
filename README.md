# MEAN project: Good movie

This is an restful Web application which recommend movie
## Requirement
Node.js version 8.11.1
Download nodeJS here (https://nodejs.org/en/)
---

## Install mongodb 
1. To install Mongodb: go to this page and download mongodb: (https://www.mongodb.com/download-center?jmp=nav#community)
2. After install, config mongodb: (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition)
3. Set mongodb to ENV path in windows to run anywhere: (http://sysadmindata.com/set-mongodb-path-windows/)
after install mongodb: open terminal run `mongod`

## Add database to mongodb:
1. run `mongo`
2. `use ML-web-app`
3. Go to database folder
4. `mongoimport --db ML-web-app --collection users  --jsonArray --type json --file users.json` 
5. `mongoimport --db ML-web-app --collection movie --jsonArray --type json --file movie.json`

---

## Installation
1. `git clone https://github.com/jackmercy/ML-webapp.git`
2. `npm install`

## Run project

# Back-end
1. Open 1st terminal: `mongod`
2. Open 2nd terminal: `npm start`
Express server will run at `localhost:5000`

# Front-end
1. Run `npm run ui` for a dev server. 
2. Navigate to `localhost:4200/`
The web application will automatically reload if you change any of the source files.

---

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Debug express
Kill terminal that run `npm start` then run `npm run debug`
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



