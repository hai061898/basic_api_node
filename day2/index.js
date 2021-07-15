let express = require('express');
let app = express();
// const datastore = require('./datamovie.json');
let MovieStore = require('./moviestore');
let moviestore = new MovieStore();
let a = (req , res) =>{
    return res.send(moviestore.all());
};

app.get('/',a);
app.get('/bye',(res,req)=>{
    return res.send('bye');
});
app.get('/movie/:title/:year',( req,res)=>{
    return res.send(req.params);
    //paramas thông tin ng dùng chuyền vào
})
app.listen(8000, ()=>{
    console.log('server start at :127.0.0.1:8000');
});
