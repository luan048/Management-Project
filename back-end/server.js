import express, { json } from 'express'
import cors from 'cors'

import cliente from './config/db.js'
import formatDate from './utils/formatterDate.js'

import { insRequests, delRequests, upRequests } from './controllers/requestsController.js'

const server = express()

// Disponibiliza o acesso a esse localhost
const corsOrigin = {
    origin: 'http://localhost:5173',
    optionsSucessStatus: 200
}

server.use(express.json())
server.use(cors(corsOrigin))

const produtos = []

server.get('/', async (req, res) => {
    try {
        const resultado = await cliente.query('SELECT * FROM requestsmonth')
        const formattedResult = resultado.rows.map(row => {
            return {
                ...row,
                date: formatDate(row.date),
            }
        })
        res.json(formattedResult)
    }

    catch (ex) {
        console.log('error server: '+ex)
    }
})

//SEARCH

server.post('/listForDate', async (req, res) => {
    const {date} = req.body

    try {
        const resultado = await cliente.query('SELECT * FROM requestsmonth WHERE date = $1', [date]) //Para mais de um valor, usar BETWEEN
        const formattedResult = resultado.rows.map(row => {
            return {
                ...row,
                date: formatDate(row.date)
            }
        })
        res.json(formattedResult)
    }

    catch(ex) {
        console.log('error server'+ex)
    }
})

server.post('/listForName', async (req, res) => {
    const { client } = req.body

    try {
        const resultado = await cliente.query("SELECT * FROM requestsmonth WHERE client = $1", [client])
        const formattedResult = resultado.rows.map(row => {
            return {
                ...row,
                date: formatDate(row.date)
            }
        })
        res.json(formattedResult)
    } 
    
    catch (ex) {
        console.log('error server: '+ex)
    }
})

//Fim do SEARCH

server.post('/requests', async (req, res) => {
    const { client, product, price, date } = req.body

    try {
        await insRequests(client,product, price, date)

        const newProduct = { id, client, product, price, date }
        produtos.push(newProduct)

        res.status(201).json({ 'message': 'Sucessfully' })
    }

    catch (ex) {
        console.log('error server'+ ex)
    }
})

server.delete('/delrequests', async (req, res) => {
    const { id } = req.body

    // Caso, com a conexão com o front-end, os valores forem considerados strings, adicionar a conversão aqui!!!!
    try {
        await delRequests(id)

        res.status(201).json({ 'message': 'Sucessfully' })
    }

    catch (ex) {
        console.log('error server'+ ex)
    }
})

server.put('/upprice', async (req, res) => {
    const { id, price } = req.body

    try {
        await upRequests(id, price)

        res.status(201).json({ 'message': 'Sucessfully' })
    }

    catch (ex) {
        console.log('error server'+ ex)
    }
})

process.on('SIGTERM', async () => {
    console.log('Fechando Servidor...')

    await cliente.end()
    console.log('Desconectado')

    process.exit(0)
})

server.listen({
    port: 3000
})