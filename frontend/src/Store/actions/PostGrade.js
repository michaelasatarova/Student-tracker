import baseUrl from '../../Helpers/BaseUrl';

import {GlobalSingleAction} from './GlobalSingleGrades';

export const sendGrade = (grade, id, history) => (dispatch, getState) => { 
    const token = getState().token
    const config = {
    body: JSON.stringify(grade ),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }),
  };
  fetch(`${baseUrl}/backend/api/grade/`, config) 
    .then((res) => res.json())  
    .then((data)=>{
      console.log('Post grade action', data)
        // history.push('/students_list');
        dispatch(GlobalSingleAction(id))

    });       
}