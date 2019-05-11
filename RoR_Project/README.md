## How to test the Demo Application

#### 1) Install the JS packages:

```
$ yarn # or npm install
```

#### 2) In one terminal run the rails server:

```
$ rails s
```

#### 3) In another terminal run the webpack server:

```
$ ./bin/webpack-dev-server
```

#### 4) Visit the welcome page

```
http://localhost:3000
```

## Built With

- [Ruby on Rails](https://github.com/rails/rails) &mdash; Our back end API is a Rails app. It responds to requests RESTfully in JSON.
- [React js](https://github.com/facebook/react) &mdash; Our front end is an React js app that communicates with the Rails API.
- [PostgreSQL](https://www.postgresql.org/) &mdash; Our main data store is in Postgres.
