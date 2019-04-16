## Resume Pro 2.

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

- Import database file -> `mysql -u username -p cv < cv.sql`
- Seed Database -> `npm run seed-db`.

##### Start development server

- Start local server -> `npm start`
