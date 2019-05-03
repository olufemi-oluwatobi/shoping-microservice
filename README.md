## Shoping micro-service

### Setup

#### Setup environment

1. Clone repository
2. Run `npm i` to install all local and dev dependencies

#### Setup database

1. Navigate to `src/db/config`
2. Remove `.example` from `database.example.json` and edit to configure database options.
3. - Migrate database -> `sequelize db:migrate`.
4. Populate database with seed data - `npm run seed`.

#### Common tasks:

##### Database operations

##### Start development server

- Start local server -> `npm start`
- run documentations `http://localhost:2000/docs/core`
