import React from "react";
import {useNavigate} from "react-router-dom";
import styles from './Login.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loginSlice } from "../../store/reducers/loginSlice";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { login, isTouched, isValid } = useAppSelector(state => state.login);
    const { setUserLogin, setIsUserLoginTouched, setIsUserLoginValid } = loginSlice.actions;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userLogin = e.target.value;

        dispatch(setIsUserLoginTouched(true));
        dispatch(setUserLogin(userLogin));

        if (userLogin.trim().length < 2) {
            dispatch(setIsUserLoginValid(false));
        } else {
            dispatch(setIsUserLoginValid(true));
        }
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid && login) {
            dispatch(setUserLogin(login));
            navigate('../counting');
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Добро пожаловать!</h2>
            <p className={styles.subtitle}>Для входа в приложение укажите, пожалуйста, своё имя.</p>
            <form className={styles.form} name="login" onSubmit={submitHandler}>
                <div className={styles.error_ontainer}>
                    {!isValid && isTouched && <span className={styles.error}>Имя должно быть длинее 2х символов.</span>}
                </div>
                <input className={styles.input} onChange={e => onChangeHandler(e)} value={login} type="text" name="login" placeholder="Имя"/>
                <button className={styles.button} type="submit" disabled={!isValid}>Войти</button>
            </form>
        </div>
    )
}

export default Login;
