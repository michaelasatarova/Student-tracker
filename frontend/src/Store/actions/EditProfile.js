import baseUrl from '../../Helpers/BaseUrl';

export const EditProfileAction = (user, history) => (dispatch, getState) => {
    const {first_name, last_name, username, city, country, street, zip_code, gitlabe_profile, email, about } = user
    const token = getState().token
    const config={
        method: 'PATCH',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }), 
        body: JSON.stringify({first_name, last_name, username, city, country, street, zip_code, gitlabe_profile, email, about})
    };

    fetch(`${baseUrl}/backend/api/users/me/`, config)
    .then(response => response.json())
    .then((data)=>{
        dispatch({type: 'GET_USER_DATA', payload: data}) 
         history.push("/profile")
    });
}


//create new user
export const CreateNewUser = (username, first_name, last_name, email, program, history) => (dispatch, getState) => { 
    const token = getState().token
    const config = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }),
    body: JSON.stringify({first_name, last_name, username, email, program})
  };
  fetch(`${baseUrl}/backend/api/users/`, config)
    .then((response) => response.json())  
    .then((data)=>{
        dispatch({type: 'GET_ALL_USERS', payload: data}) 
        history.push("/students_list")

    }); 
}

    // fetch(`${baseUrl}/backend/api/users/me/`, config)
    // .then(response => response.json())
    // .then((data)=>dispatch({type: 'EDIT_PROFILE', payload: data}));

    // const response = await fetch(`${baseUrl}/backend/api/users/me/`, config)
    // const user = await response.json() 
    // console.log("response", user)
    // return user