import React from 'react'
import './Home.css'
import { assets } from '../../assets/aasets'

const Home = () => {
    return (
        <div>
            <section className="about-section">
                <div className="side-decor left">
                    <img src={assets.sparkle} alt="" />
                </div>
                <div className="about-container">
                    <div className="about-header">
                    <hr className="decoration-bar" />
                    <h2 className="about-title">About</h2>
                    <hr className="decoration-bar" />
                </div>
                    <div className="about-content">
                        <p className="about-text">
                            Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
                        </p>
                        <p className="about-tagline">
                            The choice is yours. Because they don't have one.
                        </p>
                    </div>
                </div>
                <div className="side-decor right">
                    <img src={assets.sparkle} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Home
