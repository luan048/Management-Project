import {prismaClient} from "../config/db.js";

export async function insPurchases(nameProduct, price, quantity, date) {
    
    try {
        const id = Math.floor(1000 + Math.random() * 9000).toString()

        await prismaClient.purchaseMonth.create({
            data: {
                id:id,
                nameProduct,
                price,
                quantity,
                date,
            }
        })

        console.log('Compra inserida')
    }

    catch(ex) {
        console.log('Erro ao inserir purchase: '+ex)
    }
}

export async function delPurchases(id) {
    try {
        await prismaClient.purchaseMonth.delete({
            where: {
                id,
            }
        })

        console.log('Deletado')
    }

    catch(ex) {
        console.log('Erro ao deletar puchase: '+ex)
    }
}