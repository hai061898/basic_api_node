// CREATE TABLE `nodejs_beers`.`beers` 
// ( `id` BIGINT NOT NULL AUTO_INCREMENT , 
// `name` VARCHAR(255) NOT NULL , `tagline` VARCHAR(255) NOT NULL ,
//  `description` TEXT NOT NULL , `image` VARCHAR(50) NOT NULL ,
//   PRIMARY KEY (`id`)) ENGINE = InnoDB;


const { createPool } = require("mysql"); 

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'crud'

});
