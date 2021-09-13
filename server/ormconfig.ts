module.exports = {
  type: 'mongodb',
  url: process.env.URL,
  database: process.env.BD,
  useNewUrlParser: true,
  synchronize: true,
  entities: ['./src/vitrine_virtual_db/entities/*.ts'],
};
