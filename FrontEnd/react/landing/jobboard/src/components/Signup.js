import React from 'react';
import "../style/pages/login.css"
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-5 rounded bg-white '>
            <form>
                    <h3 className='text-center'>Incris-toi !</h3>
                    <div className='mb-2'>
                    <label htmlFor='nom'>Prénom</label>
                    <input type='text'placeholder='Entrer Prenom' className='form-control'/>
                </div>
                    <div className='mb-2'>
                    <label htmlFor='nom'>Nom</label>
                    <input type='text'placeholder='Entrer Nom' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email'placeholder='Entrer Email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Mot de passe</label>        
                    <input type='password'placeholder='Entrer Mot de passe' className='form-control'/>
                </div>
                <div className='d-grid mt-2'>
                    <button className='btn btn-primary'>Inscription</button>
                    </div>
                    <p className='text-end mt-2'>
                       Déjà inscrit<Link to='/inscription' className='ms-2'>Connexion</Link>
                    </p>
                </form>
                </div>
        </div>
    );
};

export default Signup;