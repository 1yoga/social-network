import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Мой первый пост", likesCount: 12},
                {id: 2, message: "Как дела?", likesCount: 0}
            ],
            newPostText: ""
        },
        messagesPage: {
            messagesData: [
                {id: 1, sms: "Привет"},
                {id: 2, sms: "Как дела?"},
                {id: 3, sms: "Чем занимаешься?"}
            ],
            newMessageBody: '',
            dialogsData: [
                {id: 1, name: 'Милана'},
                {id: 2, name: 'Жарков'},
                {id: 3, name: 'Хохол'},
                {id: 4, name: 'Фома'},
                {id: 5, name: 'Кэп'}
            ]
        },
        sidebar:{}

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;