import './Footer.css'
import React from 'react'

//
//
//
//
// 

export default function Footer() {
    
  return (
    <footer className='footer container' >
        <div className='footer1' >
            <div>
                <p>Toutes nos ventes flash</p>
                <p>Code promo / Offre de remboursement</p>
                <p>Nouveautés du jour</p>
                <p>Comment sont collectés les avis ?</p>
            </div>
            <div>
                <p>Livraison</p>
                <p>Formulaire de rétractation</p>
                <p>Cookies et trackers</p>
                <p>Signaler un bug</p>
            </div>
            <div>
                <p>Recherche par marque</p>
                <p>Plan du site</p>
                <p>Conditions Générales de vente</p>
                <p>Vie Privée</p>
            </div>
            <div>
                <p>Mentions légales</p>
                <p>Soldes</p>
                <p>Paiements sécurisés</p>
                <img src='\img\paiements-400.4d58469.png' alt='cartes bleu' />
            </div>
        </div>
    <div className='footer2' >
        <hr className='hr'/>
        <p>Top Achat : Nouveautés - PC Gamer - Ecran PC - PC sur mesure - Processeur - Fauteuil Gamer - SSD - PC portable - Carte     graphique - Périphériques Gamer - Alimentation PC - Carte Mère
        </p>
        <hr className='hr' />
    </div>
    <div className='footer_resaux' >
        <img src='\img\svg\Facebook.svg' alt='reseaux '></img>
        <img src='\img\svg\Twitter.svg' alt='reseaux '></img>
        <img src='\img\svg\instagram.svg' alt='reseaux '></img>
        <img src='\img\svg\tiktok.svg' alt='reseaux '></img>
        <img src='\img\svg\twitch.svg' alt='reseaux '></img>      
        <img src='\img\svg\discord.svg' alt='reseaux '></img>   
    </div>
    <div className='footer3' >
        <hr className='hr'/>
        <p>TopAchat, site de vente en ligne spécialiste en informatique. Nous te proposons des produits high-tech et gamer avec un tas de  <span>nouveautés</span>chaque jour et un outil pour réaliser ton <span>PC sur mesure</span> ! Les photos des produits ne sont pas contractuelles; le produit ne comprend 
        </p>
        <p>pas forcément tous les éléments de la photo. Se référer à la fiche détaillée du produit pour plus d'informations.
        </p>
        <p>© 1999-2023 / Top Achat</p>
    </div>
    </footer>
  );
}
