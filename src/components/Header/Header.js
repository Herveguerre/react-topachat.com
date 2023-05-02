import React from 'react';
import './Header.css';
import TopBrands from '../TopBrands/TopBrands';

function Header() {
    return (
        <div >
            <div className="header">
                <div className="logo-container">
                    <h1>topachat</h1>
                </div>
                <div className="search-container">
                    <form>
                    <input type="text" placeholder="Rechercher un produit..." className="search-input" />
                    <button type="submit" className="search-button">
                    <i className="fas fa-search">&#x26B2;</i> 
                    </button>
                    </form>
                </div>
                <div className="account-container">
                    <a href="#" className="account-link">
                    <i className="fas fa-user-circle"></i>
                    <span>Mon compte</span>
                    </a>
                    <a href="#" className="cart-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Panier</span>
                    <span className="cart-count">0</span>
                    </a>
                </div>
            </div> 
            <div>
                <div className='nav' >
                    <i   >GONFIGOMATIC</i>
                    <i   >Ordinateurs</i>
                    <i   >Composants</i>
                    <i   >Périphériques</i>
                    <i   >Gaming</i>  
                    <i   ></i>                              
                    <i   >&#x20AC; Bons plans</i>
                    <i   >Besoin d'aide</i>
                    <i   >&#x263C;</i>   
                </div>
                <div className='hero' >
                    <img src='../img/header/hero.webp' alt="hero" />
                </div>
                
            </div>
        </div>
    );
}

export default Header;
