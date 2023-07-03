import express from 'express'
<<<<<<< Updated upstream
import conection from '../db/dbConection.js'

const app = express()
app.use(express.json())

app.post('/providers', (req, res) => {
    providers.push(req.body)
    res.send('\nEnviado com sucesso')
})

app.get('/', (req, res) => {
   const sql = 'SELECT * FROM providers'
   conection.query(sql, (err, result) => {
        if(err){
            res.json({'ERRO':err})
        } 
        else{
            res.json(result)
        }
   })
})

app.get('/prov/:id', (req, res) => {
    res.json(setId(req.params.id))
})

app.put('/updateProv/:id', (req, res) => {
    let index = getIndex(req.params.id)

    providers[index].name = req.body.name
    providers[index].provider = req.body.provider

    res.json(providers)
})

export default app
=======

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

export default app
>>>>>>> Stashed changes
