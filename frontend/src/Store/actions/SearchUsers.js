import baseUrl from '../../Helpers/BaseUrl';

//search by username, first_name last_name in students
export const SearchStudentsByName = (name) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/users/search/${name}?status=Student`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_STUDENTS', payload: data}));
}

//search by username, first_name last_name in teachers
export const SearchTeachersByName = (name) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/users/search/${name}?status=Teacher`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_TEACHERS', payload: data}));
}