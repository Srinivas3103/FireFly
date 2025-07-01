import React from 'react'
import {useNavigate} from 'react-router-dom'

import './ProductCard.css'
import { assets } from '../../assets/aasets'

const ProductCard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="close-btn" onClick={()=>navigate('/home')}>&times;</span>
                    <div className="modal-images">
                        
                        <img id="mainImg" src={assets.productOpened} alt="Product Large View"/>
                            <div className="thumbnails">
                                <img src={assets.productOpened} class="thumb" alt=""/>
                                    <img src={assets.productOpened} class="thumb" alt=""/>
                                        <img src={assets.productOpened} class="thumb" alt=""/>
                                            <img src={assets.productOpened} class="thumb" alt=""/>
                                            </div>
                                        </div>

                                        <div class="modal-info">
                                            
                                            <h2>Raju Rassibomb</h2>
                                            <p><strong>MRP:</strong> Raju’s Dreams/-</p>
                                            <hr/>
                                                <p><strong>Product Description:</strong> This product packs an extra punch…</p>
                                                <ul>
                                                    <li>10 hand‑hurting pieces of rassi bombs</li>
                                                    <li>Filled with great pain</li>
                                                    <li>Raju’s hopes</li>
                                                </ul>
                                                <hr/>
                                                    <p><strong>Shipping Time:</strong> Before Raju understands…</p>

                                                    <button class="cta-btn">Choose Now</button>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                            )
}

export default ProductCard
