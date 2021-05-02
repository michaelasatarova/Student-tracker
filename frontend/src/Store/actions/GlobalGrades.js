import baseUrl from '../../Helpers/BaseUrl';

export const GlobalGradesAction = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/programs/global/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GLOBAL_GRADES', payload: data}));
}