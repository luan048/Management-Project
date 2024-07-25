import React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"

import Siderbar from "../sidebar/sidebar.jsx";

import './listRequests.css'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

function Listrequests() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/')
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className="elementsListRequests">
                <Siderbar />

                <div className="bodyListRequests">
                    {products.map(product => (
                        <div key={product.id}>
                            <i className="productId">{product.id}</i>
                            <i className="productName">{product.product}</i>
                            <i className="priceProduct">{product.price}</i>
                            <i className="dateProduct">{product.date}</i>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Listrequests