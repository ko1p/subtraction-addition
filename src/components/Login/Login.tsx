import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setUserLogin, setIsLoginValid, setIsLoginTouched} from '../../store/actions/login';
import styles from './Login.module.css';

import { ILoginState } from "../../interfaces";

const Login: React.FC = () => {
    const userLogin = useSelector((state: ILoginState) => state.login.login);
    const isLoginValid = useSelector((state: ILoginState) => state.login.isValid);
    const isLoginTouched = useSelector((state: ILoginState) => state.login.isTouched);
    const dispatch = useDispatch();

    let history = useHistory();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userLogin = e.target.value;

        dispatch(setIsLoginTouched(true));
        dispatch(setUserLogin(userLogin));

        if (userLogin.trim().length < 2) {
            dispatch(setIsLoginValid(false));
        } else {
            dispatch(setIsLoginValid(true));
        }
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoginValid && userLogin) {
            dispatch(setUserLogin(userLogin));
            history.push('/counting');
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Добро пожаловать!</h2>
            <p className={styles.subtitle}>Для входа в приложение укажите, пожалуйста, своё имя.</p>
            <form className={styles.form} name="login" onSubmit={submitHandler}>
                <div className={styles.error_ontainer}>
                    {!isLoginValid && isLoginTouched && <span className={styles.error}>Имя должно быть длинее 2х символов.</span>}
                </div>
                <input className={styles.input} onChange={e => onChangeHandler(e)} value={userLogin} type="text" name="login" placeholder="Имя"/>
                <button className={styles.button} type="submit" disabled={!isLoginValid}>Войти</button>
            </form>
        </div>
    )
}

export default Login;