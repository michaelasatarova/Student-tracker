import baseUrl from '../../Helpers/BaseUrl';

//search by title
export const SearchGroupsByName = (name) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/group/?search=${name}`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'SEARCH_GROUPS', payload: data}));
}
