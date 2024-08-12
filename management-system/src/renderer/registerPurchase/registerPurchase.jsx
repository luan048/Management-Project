import { useEffect, useState } from 'react'
import axios from 'axios'

import Siderbar from '../sidebar/sidebar.jsx'

import './registerPurchase.css'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

function Registerpurchase() {

    const [purchases, setPurchases] = useState([])
    const [inputMaterial, setInputMaterial] = useState('')
    const [inputPreco, setInputPreco] = useState('')
    const [inputQuantity, setInputQuantity] = useState('')
    const [inputDate, setInputDate] = useState('')

    useEffect(() => {
        api.get('/purchases')
            .then(response => setPurchases(response.data))
            .catch(error => console.log('error connect DB in purchase: '+error))
    }, [])

    const formattedPreco = (event) => {
        let value = event.target.value

        value = value.replace(/\D/g, '')

        value = (value / 100).toFixed(2)
        value = value.replace('.', ',')

        value = "R$ " + value

        setInputPreco(value)
    }

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

    const newPurchase = () => {
        const id = Math.floor(1000 + Math.random() * 9000)

        api.post('/insertPurchases', {
            id: id,
            nameProduct: inputMaterial,
            price: inputPreco,
            quantity: inputQuantity,
            date: inputDate
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            
            setInputMaterial('')
            setInputPreco('')
            setInputQuantity('')
            setInputDate('')
    }

    return (
        <>
            <header className='container'>
                <Siderbar />

                <div className='bodyPurchase'>
                    <h1>Cadastrar Compra de Materiais</h1>

                    <div className='elements'>
                        <div className='inputGroup'>
                            <label>Nome do Material</label>
                            <input type="text" className='inputMaterial' value={inputMaterial} onChange={(e) => setInputMaterial(e.target.value)} />
                        </div>

                        <div className='inputGroup'>
                            <label>Preço da Unidade</label>
                            <input type="text" className='inputPreco' value={inputPreco} onChange={formattedPreco} />
                        </div>

                        <div className='inputGroup'>
                            <label>Quantidade</label>
                            <input type="number" className='inputQuantity' value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)} />
                        </div>

                        <div className='inputGroup'>
                            <label>Data de compra</label>
                            <input type="text" className='inputDate' value={inputDate} onChange={formatDate} />
                        </div>
                    </div>

                    <button onClick={newPurchase} className='button'>Cadastrar</button>
                </div>
            </header>
        </>
    )
}

export default Registerpurchase