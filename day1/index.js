let express = require('express');
let app = express();
const datastore = require('./datastore.json');
// app.get('/',function(req , res){
//     return res.send('hello');
// });

// app.listen(8000, function(){
//     console.log('server start at :127.0.0.1:8000');
// });
 
// es6 
//đăt biến
let a = (req , res) =>{
    return res.send(datastore);
};
//gọi lại
app.get('/',a);

app.listen(8000, ()=>{
    console.log('server start at :127.0.0.1:8000');
});

 
// req là gữi yêu cầu
// res phản hồi lại yêu câu 

// cài đắt thunder clinent vscode  test api 