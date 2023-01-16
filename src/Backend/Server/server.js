const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase =require("../Config/database");
//dotenv config

dotenv.config({ path: "src/Backend/Config/config.env" });
// connecting to database
connectDatabase()

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

