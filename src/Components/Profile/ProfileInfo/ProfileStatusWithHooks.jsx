import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] =  useState(false)
    let [status, setStatus] =  useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus (e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}><b>Статус:</b> {props.status || "статус"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;