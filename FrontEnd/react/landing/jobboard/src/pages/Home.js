import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import "../style/pages/home.css";
import "../App.css";
import Cardj from '../components/Card';
import Barree from '../components/Barre';





const Home = () => {
    return (
        <div className='Home'>
            <Navigation />
            <h1 className='titre'>Job GPT</h1>
            <img className='img' src="https://career-center.epitech.bj/wp-content/uploads/2022/09/animation_500_l84lwyck.gif" alt="Logo d'animation" />
            <h2 className='soustitre'>Trouve ton job !</h2>
            <Barree />
            <Cardj />
           <Footer />
        </div>
        
    );
};

export default Home;