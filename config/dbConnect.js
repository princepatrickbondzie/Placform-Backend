const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/placform")
  .then(() => console.log("Database connected successffully!"))
  .catch((err) => console.log(err.message));

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected successfully!"))
//   .catch((err) => console.log(err.message));
