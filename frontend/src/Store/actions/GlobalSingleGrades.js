import baseUrl from '../../Helpers/BaseUrl';

export const GlobalSingleAction = (id) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/programs/global/${id}`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SINGLE_GRADE', payload: data}));
}