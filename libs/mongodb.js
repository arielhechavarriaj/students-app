import mongoose from "mongoose";
const connectMongoDB = async () => {
  try {
     await mongoose.connect(process.env.MONGODB_URI);
      console.log('Tenemos DB!')
  }
  catch (e)
  {
      console.log(e);
  }
}

export default connectMongoDB;