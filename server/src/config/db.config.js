import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';

// Force Node.js to use public DNS servers for SRV resolution
dns.setServers(['8.8.8.8', '1.1.1.1']);

dotenv.config();
const connectDB = async () => {
  try {
    console.log('URI:', process.env.MONGODB_URI);
    const connectionString = process.env.MONGODB_URI
    console.log("Connecting to:", process.env.MONGODB_URI);
    const conn = await mongoose.connect(connectionString);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('FULL ERROR:', error);
    console.error('MESSAGE:', error.message);
    console.error('NAME:', error.name);
    process.exit(1);
  }
};

export default connectDB;