import React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"

import Siderbar from "../sidebar/sidebar.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './listRequests.css'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

function Listrequests() {

    const [products, setProducts] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        api.get('/')
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            <div className="elementsListRequests">
                <Siderbar />

                <div className="accordion">
                    <div className="div-accordion-title" onClick={toggleExpand} >
                        <i className="accordion-title">Vendas Janeiro</i>
                        {isExpanded ? (
                            <FontAwesomeIcon icon={faCaretUp} />
                        ) : (
                            <FontAwesomeIcon icon={faCaretDown} />
                        )}
                    </div>

                    {isExpanded && (
                        <div className="accordion-content">
                            <table>
                                <thead className="theadProducts">
                                    <tr className="trTitle">
                                        <th>ID</th>
                                        <th>Produto</th>
                                        <th>Preço</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>


                                <tbody className="tbodyProducts">
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.product}</td>
                                            <td>{product.price}</td>
                                            <td>{product.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Listrequests