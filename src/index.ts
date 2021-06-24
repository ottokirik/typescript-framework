import { User } from './models/User';

const users = User.buildUserCollection();
users.fetch();

users.on('change', () => {
  console.log(users);
});
