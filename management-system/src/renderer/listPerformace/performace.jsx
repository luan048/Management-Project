import { useEffect, useState } from "react";
import axios from "axios";

import Siderbar from "../sidebar/sidebar.jsx";

import './performace.css'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

function Performacemonth() {

    const [sales, setSales] = useState([])

    useEffect(() => {
        api.get('/purchases')
            .then(response => setSales(response.data))
            .catch(error => console.log(error))
    }, [])

    const getMonthRange = (month) => {
        const year = 2024
        const dateStart = new Date(year, month -1, 1)
        const dateEnd = new Date(year, month, 0)
        return {dateStart, dateEnd}
    }

    const filterByMonth = (products, month) => {
        const {dateStart, dateEnd} = getMonthRange(month)
        return products.filter(product => {
            const [day, month, year] = product.date.split('/')
            const productDate = new Date(year, month -1, day)
            return productDate >= dateStart && productDate <= dateEnd
        })
    }

    const bodyPerformace = (month, label) => {
        const filteredProducts = filterByMonth(sales, month)

        const totalSalesMonth = filteredProducts.reduce((total, product) => {
            const saleString = product.price ? product.price.replace('R$', '').replace('.', '').replace(',', '.').trim() : '0'
            const sale = parseFloat(saleString) || 0
            const quantity = product.quantity
            
            return total + sale * quantity
        }, 0).toFixed(2)

        return (
            <div className="section-title" key={month}>
                <div className="div-title">
                    <i className="titles">{label}</i>
                </div>
                <div className="bodyGeneral">
                    <div className="elementsTable" style={{display : filteredProducts.length === 0 ? 'none' : 'block'}}>
                        {totalSalesMonth}
                        
                    </div>
                </div>
            </div>
        )

    }

    return (
        <header className="containerPerformace">
            <Siderbar fixed={true}/>

            <div className="bodyPerformace">
                {bodyPerformace(1, 'Performace de Janeiro')}
            </div>
        </header>
    )
}

export default Performacemonth