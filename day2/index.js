let express = require('express');
let app = express();
let bodyparser = require('body-parser');
// const datastore = require('./datamovie.json');

app.use(bodyParser.json({
    type:'application/json'
}))
let MovieStore = require('./moviestore');
let moviestore = new MovieStore();
let a = (req , res) =>{
    return res.send(moviestore.all());
};

app.get('/',a);
app.get('/bye',(res,req)=>{
    return res.send('bye');
});

function pageinate(data, size , page){
    let index = page -1;
    return data.slice(index*size,(index+1)*size);
}
app.get('/movie',( req,res)=>{
    let movies = moviestore.search(req.query.title);
    let page = req.query.page || 1,
        size = req.query.size || 2;
    let results = pageinate(movies, size , page);

    return res.send(
       {  payload:movies ,
        totalPage: movies.length,
          title: req.query.title,
          size:size,
          page:page,
        }
    );
    //paramas thông tin ng dùng chuyền vào
});
app.get('/movie/:title/:year',( req,res)=>{
    let foundMovies = moviestore.find(req.params.title);
    if(foundMovies.length < 1){
        res.statusCode = 404;
        return res.send({
            message:'movie not found'
        });
    }
    return res.send(
       { message: 'found', payload: foundMovies.pop()}
    );
    //paramas thông tin ng dùng chuyền vào
});
app.put('/movies/:title',(req,res)=>{
   if(!moviestore.update(req.params.title, req.body)){
       res.statusCode = 500;
       return res.send({
        message:'errro'
    })
   };

   

    return res.send({
        message:'successfully'
    })
});
app.delete('/movies/:title',(req,res)=>{
    if(!moviestore.has(req.params.title, req.body)){
        res.statusCode = 404;
        return res.send({
         message:'movie not found'
     })
    }
    moviestore.remove(title);

 
    
 
     return res.send({
         message:'successfully'
     })
 });

app.post('/movies',(req,res)=>{
    console.log(req.body);
    moviestore.add(req.body);
    if(!req.body.title || req.body.trim.length<1){
        res.statusCode = 400;
        return res.send({
            message: 'missing title'
        });
    }
    

    return res.send({
        message:'successfully'
    })
});

app.listen(8000, ()=>{
    console.log('server start at :127.0.0.1:8000');
});
