import { Schema, model, models } from 'mongoose';

export const userSchema = new Schema({
  username: String,
  password: String,
  role: String,
});

const Users = models.Users ?? model('Users', userSchema);

export default Users;
