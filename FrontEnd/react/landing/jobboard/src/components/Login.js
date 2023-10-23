import React from 'react';
import "../style/pages/login.css";

const Login = () => {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-5 rounded bg-white '>
            <form>
                <h3 className='text-center'>Connectes-toi !</h3>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email'placeholder='Entrer Email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Mot de passe</label>        
                    <input type='password'placeholder='Entrer Mot de passe' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                    <label htmlFor='check' className='custom-input-label ms-2'>
                        Se souvenir de moi ?
                    </label>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'>Se connecter</button>
                    </div>
                 
                </form>
                </div>
        </div>
    );
};

export default Login;