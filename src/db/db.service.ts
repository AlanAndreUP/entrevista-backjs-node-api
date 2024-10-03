import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5735028',                  
  password: 'Ks5j3scC1m',                        
  database: 'sql5735028',
  port: 3306                
});
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como ID ' + connection.threadId);
});

export default connection;
