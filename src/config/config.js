const env = process.env;
const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
  development: {
    database: {
      host: 'localhost',
      name: 'userpost',
      username: 'root',
      password: 'root',
    }
  },

  production: {
    database: {
      host: env.DATABASE_HOST,
      name: env.DATABASE_NAME,
      username: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
    }
  }
};

export default config[nodeEnv];
