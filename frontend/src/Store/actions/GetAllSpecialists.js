
import baseUrl from '../../Helpers/BaseUrl';

//get git specialist
export const GetGitSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/git/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_GIT_SPECIALISTS', payload: data}));
}

//get html specialist
export const GetHtmlSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/html/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_HTML_SPECIALISTS', payload: data}));
}

//get sass specialist
export const GetSassSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/sass/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_SASS_SPECIALISTS', payload: data}));
}

//get Python specialist
export const GetPythonSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/python/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_PYTHON_SPECIALISTS', payload: data}));
}

//get django specialist
export const GetDjangoSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/django/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_DJANGO_SPECIALISTS', payload: data}));
}

//get DOCKER specialist
export const GetDockerSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/docker/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_DOCKER_SPECIALISTS', payload: data}));
}

//get Javascript specialist
export const GetJavascriptSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/javascript/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_JAVASCRIPT_SPECIALISTS', payload: data}));
}

//get Node specialist
export const GetNodeSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/node/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_NODE_SPECIALISTS', payload: data}));
}

//get React specialist
export const GetReactSpecialist = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/expertise/search/react/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_REACT_SPECIALISTS', payload: data}));
}