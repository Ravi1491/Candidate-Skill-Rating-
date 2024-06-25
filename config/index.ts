export const applicationConfig = {
  app: {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 8080,
  },
  db: {
    dbDialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
};