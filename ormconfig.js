module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['**/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
