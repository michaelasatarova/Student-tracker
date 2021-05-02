import baseUrl from '../../Helpers/BaseUrl';

//get log in user
export const GetPrograms = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/programs/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_PROGRAMS', payload: data}));
}
