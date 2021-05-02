// Store/actions/SearchLecturesActions.js

import baseUrl from '../../Helpers/BaseUrl';

//search by title
export const SearchLecturesByTitle = (title) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectures/?search=${title}`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_LECTURES', payload: data}));
}

export const SearchLectureWeeksByTitle = (title) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectureweeks/?search=${title}`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_LECTUREWEEKS', payload: data}));
}

export const SearchProgramsByName = (name) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/programs/?search=${name}`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_PROGRAMS', payload: data}));
}

export const SearchLessonsByDate = (date) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lessons/?search=${date}`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_LESSONS', payload: data}));
}
