// Store/actions/LecturesActions.js

import baseUrl from '../../Helpers/BaseUrl';

// Lecture ---------------------------------------------------------------------
export const GetLectureData = (lecture_id) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectures/${lecture_id}/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_LECTURE_DATA', payload: data}));
}

export const GetLectureByWeek = (lectureweek_id, history) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectures/lectureweek/${lectureweek_id}/`, config)
        .then(response => response.json())
        .then((data)=>{
            console.log('GetLectureByWeek data', data)
            dispatch ({type: 'GET_ALL_LECTURES', payload: data})

            history.push('/lectures')
    });

}


export const LecturesActions = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectures/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LECTURES', payload: data}));
}

export const GetLectureById = (lecture_id) => async (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    const response = await fetch(`${baseUrl}/backend/api/lectures/${lecture_id}/`, config)
    const lecture = await response.json()
    console.log("response", lecture)
    return lecture
}

export const EditLectureAction = (lecture_id, lecture, history) => (dispatch, getState) => {
    const {title, exercise, description,  expertise, programs, week, weekday } = lecture
    const token = getState().token
    const config={
        method: 'PATCH',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
        body: JSON.stringify({title, exercise, description,  expertise, programs, week, weekday})
    };

    fetch(`${baseUrl}/backend/api/lectures/${lecture_id}/`, config)
    .then(response => response.json())
    .then((data)=>{
        dispatch({type: 'GET_LECTURE_DATA', payload: data})
         history.push("/lectures")
    });
}


// LectureWeeks ----------------------------------------------------------------
export const GetLectureWeekData = (lectureweek_id) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectureweeks/${lectureweek_id}/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_LECTUREWEEK_DATA', payload: data}));
}

export const GetAllLectureWeeks = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectureweeks/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LECTUREWEEKS', payload: data}));
}
export const LectureWeekActions = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectureweeks/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LECTUREWEEKS', payload: data}));
}

export const GetLectureWeekById = (lectureweek_id) => async (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    const response = await fetch(`${baseUrl}/backend/api/lectureweeks/${lectureweek_id}/`, config)
    const lectureweek = await response.json()
    console.log("response", lectureweek)
    return lectureweek
}

export const EditLectureWeekAction = (lectureweek_id, lectureweek, history) => (dispatch, getState) => {
    const {title, sort } = lectureweek
    const token = getState().token
    const config={
        method: 'PATCH',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
        body: JSON.stringify({title, sort})
    };

    fetch(`${baseUrl}/backend/api/lectureweeks/${lectureweek_id}/`, config)
    .then(response => response.json())
    .then((data)=>{
        dispatch({type: 'GET_LECTUREWEEK_DATA', payload: data})
         history.push("/lectureweeks")
    });
}

// Lessons ---------------------------------------------------------------------
export const GetAllLessons = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lessons/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LESSONS', payload: data}));
}
//  Programs -------------------------------------------------------------------
export const GetAllPrograms = () => (dispatch, getState) => {
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
export const GetProgramData = (program_id) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/programs/${program_id}/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_PROGRAM_DATA', payload: data}));
}

export const ProgramsActions = () => (dispatch, getState) => {
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

export const GetProgramById = (program_id) => async (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    const response = await fetch(`${baseUrl}/backend/api/programs/${program_id}/`, config)
    const program = await response.json()
    console.log("response", program)
    return program
}

export const EditProgramAction = (program_id, program, history) => (dispatch, getState) => {
    const {title, exercise, description,  expertise, programs, week, weekday } = program
    const token = getState().token
    const config={
        method: 'PATCH',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
        body: JSON.stringify({title, exercise, description,  expertise, programs, week, weekday})
    };

    fetch(`${baseUrl}/backend/api/programs/${program_id}/`, config)
    .then(response => response.json())
    .then((data)=>{
        dispatch({type: 'GET_PROGRAM_DATA', payload: data})
         history.push("/programs")
    });
}
