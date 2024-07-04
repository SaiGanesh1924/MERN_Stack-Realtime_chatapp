import mongoose from "mongoose";

const connectMongodb = async ()=>{

    try{
          await mongoose.connect(process.env.MONGODB_URI);
          console.log("connected to Mongodb");
}catch(err)
{
    console.log("error in connecting  with mongodb")
}

}

export default connectMongodb 