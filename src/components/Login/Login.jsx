import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../../api/axios';
import password_icon from '../../assets/password.png';
import user_icon from '../../assets/person.png';
import AuthContext from "../../context/Authprovider";
import './login.css';


const LOGIN_URL = 'auth';


const Login = () => {
   

    const [user, setUser] = useState('');
    const[pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(true);
        setPwd('');
        setUser('');
    }

    return (
        <>
        {success ? (
            <Navigate to='/home'/>
        ) : (
            <section>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <div className='text'>Iniciar Sesion</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
    <div className='input'>
        <label htmlFor='username'>Usuario</label>
        <div className='input-field'>
            <img src={user_icon} alt='User' />
            <input
                id='username'
                type='text'
                placeholder='Usuario'
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
        </div>
    </div>
    <div className='input'>
        <label htmlFor='password'>Contraseña</label>
        <div className='input-field'>
            <img src={password_icon} alt='Password' />
            <input
                id='password'
                type='password'
                placeholder='Contraseña'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
        </div>
    </div>
</div>

            <div className='submit-container'>
                <div
                    className="submit"
                    onClick={handleSubmit}
                >
                    Login
                </div>
            </div>
        </form>
        </section>
        )}
        </>
    )
}

export default Login;

