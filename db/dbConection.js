import mysql from 'mysql'

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "drecis",
    password: "",
    port: "3306"
})

conection.connect()

export default conection
