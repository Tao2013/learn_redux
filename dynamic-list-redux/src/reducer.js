import CREATE_USER from "./action"

const defaultStore={
    users:[]
}

const reducer = (state=defaultStore, action) => {
    switch(action.state){
        case CREATE_USER:{
            let newUser={"firstName": action.data.firstName, "lastName": action.data.lastName};
            let newState = Object.assign(state, newUser);
            return newState;
        }
        default:
            return state;
    }
}

export default reducer
