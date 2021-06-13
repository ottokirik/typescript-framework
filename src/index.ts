import { User } from './models/User';

const user = new User({ id: 1, name: 'Bobby', age: 56 });

user.on('save', () => {
  console.log(user);
});

user.save();

/*user.set({ name: 'Bob', age: 22 });
user.save(); */

/* const user2 = new User({ name: 'John', age: 25 });
user2.save(); */
