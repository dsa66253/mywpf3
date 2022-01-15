
import dotenv from "dotenv-defaults";// .env need to be put under backend directory
import mongoose from "mongoose";


const mongo = ()=>{
  dotenv.config();
  // // if(!process.env.MONGO_URL){
  // //   console.error("Missing MONGO_URL");
  // //   process.exit(1);
  // // }
  // mongoose
  //   .connect("mongodb+srv://dsa66253:s821026@cluster0.a3dyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then((res) => console.log("mongo db connection created"));


  // const db = mongoose.connection;
  // db.on("error", (error)=>{
  //   throw new Error("DB connection error: "+ error);
  // })

  // db.once("open", () => {
  //   const PORT = process.env.port || 5000;
  //     console.log(`Listening on http://localhost:${PORT}`);
  // });
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, //!這個不住解掉local端會錯，但是助教的不會錯
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Mongo Connected with MONGOURL", process.env.MONGO_URL);
    console.log("Mongo Connected with port", process.env.PORT || 5000);
  });

}
export { mongo };