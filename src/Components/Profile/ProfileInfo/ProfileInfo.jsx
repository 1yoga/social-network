import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../img/9f08957fdb87a044dd6b8b5ddea8b024.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, id, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            })}
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt="img" src={profile.photos.large || userPhoto} className={s.avatar}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Изменить</button>
        </div>}
        <div>
            <b> Имя: </b> {profile.fullName}
        </div>
        <div>
            <b> ID: </b> {profile.userId}
        </div>
        <div>
            <b> О себе: </b> {profile.aboutMe}
        </div>
        <div>
            <b> В поисках работы: </b> {profile.lookingForAJob ? "Да" : "Нет"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b> Профессиональные навыки: </b> {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b> Контакты: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b> {contactTitle} : </b> {contactValue} </div>
}

export default ProfileInfo;