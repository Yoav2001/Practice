import knex from 'knex' 

// const db = knex({
//     client: 'pg',
//     connection: {
//       host:'localhost',
//       user : 'postgres',
//       password : 'y2o0a0v1',
//       port:5432,
//       database : 'koaapp_tutorial',
//       connectTimeout: 90000
//     },
//     debug: true,
//     pool: {
//       min: 1,
//       max: 20
//     }
//   });
  const db = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'y2o0a0v1',
      database: 'koaapp_tutorial',
    },
  });

 export default db;
// import pg from "pg";

// const pool = new pg.Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "koaapp_tutorial",
//   password: "y2o0a0v1",
//   port: 5432,
// });

// export default pool;