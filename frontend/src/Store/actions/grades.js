import { baseURL } from '../constants';
import { FETCH_ALL_STUDENT_GRADES } from '../actionTypes';


const fetchAllStudentGradesAction = (grades) => {
      return {
          type: FETCH_ALL_STUDENT_GRADES,
          payload: grades,
      }
}

export const  fetchAllStudentGrades = () => async (dispatch, getState) => {
    const token = getState().token
    console.log('fetch all',token)
    const config = {
        method: "GET",
        headers: new Headers({
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        })
        //need to add the header
    }
    const response = await fetch(`${baseURL}/grade/`, config)
    const json = await response.json()
    if (response.ok) {
        console.log('fetching test', json)
        dispatch(fetchAllStudentGradesAction(json))
    }
    return json
}