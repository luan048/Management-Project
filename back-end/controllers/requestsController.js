import { prismaClient } from "../config/db.js";

export async function insRequests(client, product, price, date) {
    try {
        const productId = Math.floor(1000 + Math.random() * 9000).toString()

        await prismaClient.requestsMonth.create({
            data: {
                id: productId,
                client,
                product,
                price,
                date,
            },
        })

        console.log('Inserido')
    }

    catch(ex) {
        console.log('error controller: '+ex)
    }
}

export async function delRequests(id) {
    try {
        await prismaClient.requestsMonth.delete({
            where: {
                id,
            }
        })
        
        console.log('Removido')
    }

    catch(ex) {
        console.log('error controller: '+ex)
    }
}

export async function upRequests(id, price) {

    try {
        await prismaClient.requestsMonth.update({
            where: {
                id,
            },
            data: {
                price,
            }
        })
        console.log('Preço Atualizado')
    }

    catch(ex) {
        console.log('error controller: '+ex)
    }
}