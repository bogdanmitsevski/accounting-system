require('dotenv').config();
import express from 'express';
const sequelize = require('./db');
const app = express();
app.use(express.json());
app.use('/api', require('./routes/index'));
const port = process.env.PORT || 3111;

const  start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
    app.listen(port, ()=>{
        console.log(`Server is working on port ${port}`);
});
    }
    catch(e){
        console.log(e);
    }
}

start();