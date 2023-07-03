import express from 'express'
import conexao from '../db/dbConection.js'

const app = express()
app.use(express.json())

app.post('/create', (req, res) => {
    let body = req.body
    let sql = 'INSERT INTO providers SET ?'
    conexao.query(sql, body, (err, result) => {
        if (err) {
            res.json({ 'ERROR ': err })
        }
        else {
            res.json(result)
        }
    })
})

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM providers;'

    conexao.query(sql, (err, result) => {
        if (err) {
            res.json({ 'ERROR ': err })
        }
        else {
            res.send(result)
        }
    })
})


app.get('/:id', (req, res) => {
    let id = req.params.id
    let sql = 'SELECT * FROM providers WHERE prov_id = ?;'

    conexao.query(sql, id, (err, result) => {
        if (err) {
            res.json({ 'ERROR ': err })
        }
        else {
            res.send(result)
        }
    })
})


app.put('/update/:id', (req, res) => {
    let sql = 'UPDATE providers SET ? WHERE prov_id = ?'
    let body = req.body
    let id = req.params.id

    conexao.query(sql, [body, id], (err, result) => {
        if (err) {
            res.json({ 'ERROR: ': err })
        } else {
            res.json(result)
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    let id = req.params.id
    let sql = 'DELETE FROM providers WHERE prov_id = ?'

    conexao.query(sql, id, (err, result) => {
        if (err) {
            res.json({ 'ERROR: ': err })
        } else {
            res.json(result)
        }
    })
})


export default app
