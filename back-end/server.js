import express from 'express'
import cors from 'cors'

import {prismaClient} from './config/db.js'

import { insRequests, delRequests, upRequests } from './controllers/requestsController.js'
import { insPurchases, delPurchases } from './controllers/purchasesController.js'

import { RequestsValidation } from './middleware/requestsValidation.js'
import { PurchasesValidation } from './middleware/purchasesValidation.js'
import { SearchValidation } from './middleware/searchValidation.js'

const server = express()

const instanceRequestValidation = new RequestsValidation()
const instanceSearchValidation = new SearchValidation()

const instancePurchaseValidation = new PurchasesValidation()

server.use(express.json())
server.use(cors())

const port = process.env.PORT ?? 4000

const produtos = []
const purchases = []


//SERVER PARA VENDAS
server.get('/', async (req, res) => {
    try {
        const resultado = await prismaClient.requestsMonth.findMany()
        
        res.json(resultado)
    } catch (ex) {
        console.log('error server: ' + ex)
    }
})

//SEARCH
server.post('/listForName', instanceSearchValidation.searchRequest, async (req, res) => {
    const { client } = req.body

    try {
        const resultado = await prismaClient.requestsMonth.findMany({
            where: {
                client,
            },
        })

        res.json(resultado)
    }
    
    catch (ex) {
        console.log('error server: '+ex)
    }
})

// //Fim do SEARCH

server.post('/requests', instanceRequestValidation.createRequestValidation, async (req, res) => {
    const { client, product, price, date } = req.body

    try {
        await insRequests(client, product, price, date)

        res.status(201).json({ 'message': 'Sucessfully' })
    } 
    
    catch (ex) {
        console.log('error server'+ ex)
    }
})

server.delete('/delrequests', instanceRequestValidation.deleteRequestValidation, async (req, res) => {
    const { id } = req.body

    try {
        await delRequests(id)

        res.status(201).json({ 'message': 'Sucessfully' })
    } 
    
    catch (ex) {
        console.log('error server'+ ex)
    }
})

server.put('/upprice', instanceRequestValidation.updateRequestsValidation, async (req, res) => {
    const { id, price } = req.body

    try {
        await upRequests(id, price)

        res.status(201).json({ 'message': 'Sucessfully' })
    } 
    
    catch (ex) {
        console.log('error server'+ ex)
    }
})

// //FIM DO SERVER VENDAS

// //SERVER PARA REGISTRO DE COMPRA DE PRODUTOS

server.get('/purchases', async (req, res) => {
    try {
        const resultado = await prismaClient.purchaseMonth.findMany()

        res.json(resultado)
    }
    
    catch(ex) {
        console.log('error server: ' +ex)
    }
})

server.post('/insertPurchases',  instancePurchaseValidation.createPurchaseValidation, async(req, res) => {
    const {nameProduct, price, quantity, date} = req.body

    try {
        await insPurchases(nameProduct, price, quantity, date)

        res.status(201).json({'message': 'Sucessfully'})
    } 
    
    catch(ex) {
        console.log('error server: ' +ex)
    }
})

server.delete('/delPurchases', instancePurchaseValidation.deletePurchaseValidation, async(req, res) => {
    const {id} = req.body

    try {
        await delPurchases(id)

        res.status(201).json({'message': 'Sucessfully'})
    } catch(ex) {
        console.log('error server: '+ex)
    }
})

//FIM DO SERVER PRODUTOS
process.on('SIGTERM', async () => {
    console.log('Fechando Servidor...')

    await cliente.end()
    console.log('Desconectado')

    process.exit(0)
})

server.listen(port, () => console.log(`Server is running on port: ${port}`))
