import React, { useEffect, useState } from "react";
import axios from "axios";
import Siderbar from "../sidebar/sidebar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './listRequests.css';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

function Listrequests() {
    const [products, setProducts] = useState([]);
    const [expandedMonth, setExpandedMonth] = useState(null);

    useEffect(() => {
        api.get('/')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    const toggleExpand = (month) => {
        setExpandedMonth(expandedMonth === month ? null : month);
    };

    const renderAccordion = (month, label) => (
        <div className="accordion-section">
            <div className='div-accordion-title' onClick={() => toggleExpand(month)}>
                <i className="accordion-title">{label}</i>
                {expandedMonth === month ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                )}
            </div>
            <div className={`accordion-content ${expandedMonth === month ? 'expanded' : ''}`}>
                <table>
                    <thead className="theadProducts">
                        <tr className="trTitle">
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="tbodyProducts">
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.client}</td>
                                <td>{product.product}</td>
                                <td>{product.price}</td>
                                <td>{product.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="elementsListRequests">
            <Siderbar />
            <div className="accordions">
                {renderAccordion('january', 'Vendas Janeiro')}
                {renderAccordion('february', 'Vendas Fevereiro')}
                {renderAccordion('march', 'Vendas Março')}
                {renderAccordion('april', 'Vendas Abril')}
                {renderAccordion('may', 'Vendas Maio')}
                {renderAccordion('june', 'Vendas Junho')}
                {renderAccordion('july', 'Vendas Julho')}
                {renderAccordion('august', 'Vendas Agosto')}
                {renderAccordion('september', 'Vendas Setembro')}
                {renderAccordion('october', 'Vendas Outubro')}
                {renderAccordion('november', 'Vendas Novembro')}
                {renderAccordion('december', 'Vendas Dezembro')}
            </div>
        </div>
    );
}

export default Listrequests;
