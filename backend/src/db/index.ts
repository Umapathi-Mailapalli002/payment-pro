import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_URI as string}/payment-pro`);
        console.log(`✅ MongoDB connected: ${connectInstance.connection.host}`);
    } catch (error) {
       console.error('❌ MongoDB connection error:', error);
       process.exit(1); 
    }
};
export default connectDB;