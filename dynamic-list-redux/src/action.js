const CREATE_USER="CREATE_USER";


const createUser = data => ({
    type: CREATE_USER,
    payload: data,
});

export default{
    createUser,
    CREATE_USER,
}
