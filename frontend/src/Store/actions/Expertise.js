
//GET USER EXPERTISE

import baseUrl from '../../Helpers/BaseUrl';

export const GetUserExpertise = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/user/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_USER_EXPERTISE', payload: data}));
}
