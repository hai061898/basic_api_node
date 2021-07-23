const pool = require("../config/data");

module.exports ={
    show: (err, connection) =>{
        pool.getConnection((err, connection) => {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from beers', (err, rows) => {
                connection.release() // return the connection to pool
    
                if (!err) {
                    res.send(rows)
                } else {
                    console.log(err)
                }
    
                // if(err) throw err
                console.log('The data from beer table are: \n', rows)
            })
        })
    }

    
}
