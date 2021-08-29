const ADD_SMS = 'ADD-SMS';

let initialState = {
    messagesData: [
        {id: 1, sms: "Привет"},
        {id: 2, sms: "Как дела?"},
        {id: 3, sms: "Чем занимаешься?"}
    ],
    dialogsData: [
        {id: 1, name: 'Милана'},
        {id: 2, name: 'Жарков'},
        {id: 3, name: 'Хохол'},
        {id: 4, name: 'Фома'},
        {id: 5, name: 'Кэп'}
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SMS:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, sms: action.newSmsText}]
            }
        default:
            return state;
    }
}

export const addSmsActionCreator = (newSmsText) => {
    return {
        type: ADD_SMS, newSmsText
    }
}

export default messagesReducer;