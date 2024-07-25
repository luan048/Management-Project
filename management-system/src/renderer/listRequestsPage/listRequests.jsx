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
                    <table>
                        <div className="theadProducts">
                            <div className="trTitle">
                                <p>ID</p>
                                <p>Produto</p>
                                <p>Preço</p>
                                <p>Data</p>
                            </div>
                        </div>

                        <div className="tbodyProducts">
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.product}</td>
                                    <td>{product.price}</td>
                                    <td>{product.date}</td>
                                </tr>
                            ))}
                        </div>
                        
                    </table>
                </div>
                
            </div>
        </>
    )
}

export default Listrequests