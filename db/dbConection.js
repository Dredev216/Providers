import mysql from 'mysql'

const conexao = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        port: '3306',
        database: 'providersdb',
        password: ''
    }
)

conexao.connect()

export default conexao
