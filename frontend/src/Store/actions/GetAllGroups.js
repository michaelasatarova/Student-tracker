import baseUrl from '../../Helpers/BaseUrl';

export const GetAllGroups = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/group/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_GROUPS', payload: data}));
}
