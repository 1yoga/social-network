import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-redusers";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField("E-mail", "email", [required], Input)}
        {createField("Пароль", "password", [required], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Запомнить")}

        {captchaUrl && <img alt="img" src={captchaUrl}/>}
        {captchaUrl && createField("Введите символы с картинки", "captcha", [required], Input, {})}

        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Войти</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)