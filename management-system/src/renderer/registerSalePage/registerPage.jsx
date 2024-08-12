import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Siderbar from "../sidebar/sidebar.jsx";

import './registerPage.css'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

function Registerpage() {
    const [products, setProducts] = useState([])
    const [inputClient, setInputClient] = useState('')
    const [inputProduct, setInputProduct] = useState('')
    const [inputPrice, setInputPrice] = useState('')
    const [inputDate, setInputDate] = useState('')

    useEffect(() => {
        api.get('/')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])

    //Formata Price
    const formatedPrice = (event) => {
        let value = event.target.value 
        //Remove tudo que não seja número
        value = value.replace(/\D/g, '')

        // Colocar vírgula para separa casas decimais
        value = (value / 100).toFixed(2) + ''
        value = value.replace('.', ',')

        value = "R$ " + value

        setInputPrice(value)
    }

    //Fim formatted Price

    //Inicio Formatted Date

    const formatDate = (event) => {
        let value = event.target.value
    
        value = value.replace(/\D/g, '')
    
        if (value.length > 8) {
            value = value.slice(0, 8)
        }
    
        if (value.length > 4) {
            value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3')
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2')
        }
    
        setInputDate(value)
    }

    //Fim Formatted Date

    const newSale = () => {
        const id = Math.floor(1000 + Math.random()*9000)

        api.post('/requests', {
            id: id,
            client: inputClient,
            product: inputProduct,
            price: inputPrice,
            date: inputDate
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

            setInputClient('')
            setInputPrice('')
            setInputProduct('')
            setInputDate('')
    }

    return (
        <>
            <header className="container">
                <Siderbar />

                <div className="bodyRegister">
                    <h1>Cadastrar Vendas</h1>

                    <div className="elementsInput">

                        <div className="inputGroup">
                            <label>Nome do Cliente</label>
                            {/* Sempre que tiver uma mudança (onChange) será atualizado o input */}
                            <input type="text" className="inputClient" value={inputClient} onChange={(e) => setInputClient(e.target.value)}/>
                        </div>
                         
                         <div className="inputGroup">
                            <label>Nome do Produto</label>
                            <input type="text" className="inputProduct" value={inputProduct} onChange={(e) => setInputProduct(e.target.value)}/>
                         </div>

                         <div className="inputGroup">
                            <label >Preço</label>
                            <input type="text" className="inputPrice" value={inputPrice} onChange={formatedPrice}/>
                         </div>

                         <div className="inputGroup">
                            <label>Data </label>
                            <input type="text" className="inputDate" value={inputDate} onChange={formatDate}/>
                         </div>

                    </div>

                    <button onClick={newSale} className="button">Cadastrar</button>
                </div>
                
            </header>
        </>
    )
}

export default Registerpage