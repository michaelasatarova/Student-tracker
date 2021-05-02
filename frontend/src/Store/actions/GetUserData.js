import baseUrl from '../../Helpers/BaseUrl';

//get log in user
export const GetUserData = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/users/me/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_USER_DATA', payload: data}));
}

//get all users
export const GetAllUsers = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/users/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_USERS', payload: data}));
}


//get user by id
export const GetUserById = (user_id) => async (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    const response = await fetch(`${baseUrl}/backend/api/users/${user_id}`, config)
    const user = await response.json() 
    console.log("response", user)
    dispatch({type: 'GET_SINGLE_USER', payload:user})     
}
