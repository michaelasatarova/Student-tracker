import baseUrl from '../../Helpers/BaseUrl';

//get log in user
export const GetStudentGroups = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/group`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_STUDENTS_GROUPS', payload: data}));
}