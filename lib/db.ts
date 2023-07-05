import mongoose from 'mongoose';

let connection: typeof mongoose;

export const connectToDB = async () => {
  if (connection) return connection;

  const { MONGODB_URI, DB_NAME } = process.env;
  try {
    connection = await mongoose.connect(MONGODB_URI as string, {
      dbName: DB_NAME,
    });
    return connection;
  } catch (error) {
    throw { message: 'Error connection to the database', error };
  }
};
