const express=require('express');
const path=require('path');
const logger=require('./middleware/logger');

//body parser

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname,'public')));


app.use('/api/booklist',require('./routes/api/booklist'));
app.use(logger);



const PORT=process.env.PORT||4000;
app.listen(PORT,()=>console.log(`Server is using ${PORT}`));
