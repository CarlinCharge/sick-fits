import { User } from './schemas/User';
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // stay signed in forever
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // add data seeding here
  },
  lists: createSchema({
    // schema items go in here
    User,
  }),
  ui: {
    // change this for roles
    isAccessAllowed: () => true,
  },
  // add session values here
});
