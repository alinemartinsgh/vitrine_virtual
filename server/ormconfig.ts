module.exports = {
  type: 'mongodb',
  url: process.env.URL,
  useNewUrlParser: true,
  synchronize: true,
  entities: ['**/src/entity/*{.ts,.js}'],
};
