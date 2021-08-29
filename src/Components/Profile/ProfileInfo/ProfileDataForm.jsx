import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from "../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Сохранить</button></div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <b> Имя: </b> {createField("Имя", "fullName", [], Input)}
        </div>
        <div>
            <b> О себе: </b> {createField("О себе", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b> В поисках работы: </b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b> Профессиональные навыки: </b> {createField("Профессиональные навыки", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b> Контакты: </b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm