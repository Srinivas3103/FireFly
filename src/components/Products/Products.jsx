import React from 'react'
import {useNavigate} from 'react-router-dom'
import { assets } from '../../assets/aasets'
import './Products.css'
const Products = () => {
    const navigate = useNavigate()

    return (
        <div>
            <section className="products-section">
                <div className="products-header">
                    <h2 className="products-title">Our products</h2>
                </div>
                <div className="products-grid">
                    <div className="product-card">
                        <img src={assets.product} alt="Product 1" />
                        <div className="product-info">
                            <h3>Raju Rassibomb</h3>
                            <button className="quick-view" onClick={()=>navigate('/productview')}>QUICK VIEW</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={assets.product} alt="Product 2" />
                        <div className="product-info">
                            <h3>Ladiyon ki Rani Chani</h3>
                            <button className="quick-view" onClick={()=>navigate('/productview')}>QUICK VIEW</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
