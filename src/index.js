
require("dotenv").config();
const express = require('express');
const app = express();
const routes = require("./routes");
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');



const PORT = process.env.PORT || 3000; 


app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());



app.use("/v1", routes);


app.listen(PORT, (err)=>{
  console.log(`listening on ${PORT}`);
}); 