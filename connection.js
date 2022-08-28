let mysql = require('mysql');
const querys = require('./queries.js');


let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABSE
});

connection.connect((err) => {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});



queries = () => {
  return new Promise((resolve, reject) => {
    connection.query(querys.insert_query, (error, results) => {
      if (error) {
        reject(console.error(error.message));
      }
      resolve(console.log("INSERTED INTO DATABASE TABLE", results));
    });

    connection.query(querys.update_query, (error, results) => {
      if (error) {
        reject(console.error(error.message));
      }
      resolve(console.log("UPDATED INTO THE DATABASE TABLE", results));
    });

    connection.query(querys.delete_query, (error, results) => {
      if (error) {
        reject(console.error(error.message));
      }
      resolve(console.log("DELETED THE RECORD IN DATABASE TABLE", results));
    });

    connection.query(querys.select_query, (error, results) => {
      if (error) {
        reject(console.error(error.message));
      }
      resolve(console.log("DISPLAYING THE DATA FROM DATABASE TABLE", results));
    });
  })
}



queries().then(() => {
}).catch((err) => {
  console.log("Error Message : " + err);
});

connection.end(); 