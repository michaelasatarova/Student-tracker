import baseUrl from '../../Helpers/BaseUrl';

export const GetAllStudents = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/users/students/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_STUDENTS', payload: data}));
}
